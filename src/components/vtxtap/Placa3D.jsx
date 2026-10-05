import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useMediaQuery';

/**
 * A plaquinha padrão em 3D, como na landing do VTX Tap: balança de leve
 * sozinha, gira ao arrastar (com inércia) e pelas setas do teclado, e os
 * botões levam à frente (deitada) ou ao verso (em pé).
 */
export function Placa3D() {
  const palcoRef = useRef(null);
  const placaRef = useRef(null);
  const reduced = useReducedMotion();
  const [lado, setLado] = useState('frente');
  const st = useRef({ rx: -8, ry: -22, rz: 0, s: 1, vx: 0, vy: 0, drag: false, tocou: false, t: 0, x0: 0, y0: 0, raf: 0, visivel: false });

  useEffect(() => {
    const palco = palcoRef.current;
    const placa = placaRef.current;
    if (!palco || !placa) return undefined;
    const s = st.current;

    const aplicar = () => {
      placa.style.setProperty('--rx', `${s.rx}deg`);
      placa.style.setProperty('--ry', `${s.ry}deg`);
      placa.style.setProperty('--rz', `${s.rz}deg`);
      placa.style.setProperty('--s', s.s);
      const verso = Math.cos((s.ry * Math.PI) / 180) * Math.cos((s.rx * Math.PI) / 180) < 0;
      setLado(verso ? 'verso' : 'frente');
    };
    const laco = () => {
      if (!s.drag) {
        if (!s.tocou && !reduced) {
          s.t += 0.012;
          s.ry = -22 + Math.sin(s.t) * 16;
          s.rx = -8 + Math.sin(s.t * 0.7) * 4;
        } else {
          s.ry += s.vy;
          s.rx = Math.max(-70, Math.min(70, s.rx + s.vx));
          s.vy *= 0.94;
          s.vx *= 0.94;
        }
      }
      aplicar();
      const segue = s.drag || (!s.tocou && !reduced && s.visivel) || Math.abs(s.vx) + Math.abs(s.vy) > 0.02;
      s.raf = segue ? requestAnimationFrame(laco) : 0;
    };
    const ligar = () => {
      if (!s.raf) s.raf = requestAnimationFrame(laco);
    };
    s.ligar = ligar;
    s.aplicar = aplicar;

    const down = (e) => {
      s.tocou = true;
      s.drag = true;
      s.x0 = e.clientX;
      s.y0 = e.clientY;
      s.vx = s.vy = 0;
      s.rz = 0;
      s.s = 1;
      placa.classList.remove('anima');
      palco.setPointerCapture(e.pointerId);
      ligar();
    };
    const move = (e) => {
      if (!s.drag) return;
      const k = e.pointerType === 'touch' ? 0.6 : 0.5;
      const dx = e.clientX - s.x0;
      const dy = e.clientY - s.y0;
      s.x0 = e.clientX;
      s.y0 = e.clientY;
      s.vy = dx * k;
      s.vx = -dy * k * 0.8;
      s.ry += s.vy;
      s.rx = Math.max(-70, Math.min(70, s.rx + s.vx));
    };
    const up = () => {
      s.drag = false;
    };
    const key = (e) => {
      const passo = { ArrowLeft: [0, -15], ArrowRight: [0, 15], ArrowUp: [10, 0], ArrowDown: [-10, 0] }[e.key];
      if (!passo) return;
      e.preventDefault();
      s.tocou = true;
      s.rz = 0;
      s.s = 1;
      placa.classList.add('anima');
      s.rx = Math.max(-70, Math.min(70, s.rx + passo[0]));
      s.ry += passo[1];
      aplicar();
    };

    palco.addEventListener('pointerdown', down);
    palco.addEventListener('pointermove', move);
    palco.addEventListener('pointerup', up);
    palco.addEventListener('pointercancel', up);
    palco.addEventListener('keydown', key);
    // O balanço sozinho só roda com a plaquinha na tela.
    const io = new IntersectionObserver(([entrada]) => {
      s.visivel = entrada.isIntersecting;
      if (s.visivel && !reduced) ligar();
    });
    io.observe(palco);
    aplicar();

    return () => {
      io.disconnect();
      cancelAnimationFrame(s.raf);
      s.raf = 0;
      palco.removeEventListener('pointerdown', down);
      palco.removeEventListener('pointermove', move);
      palco.removeEventListener('pointerup', up);
      palco.removeEventListener('pointercancel', up);
      palco.removeEventListener('keydown', key);
    };
  }, [reduced]);

  const irPara = (alvoLado) => {
    const s = st.current;
    const placa = placaRef.current;
    s.tocou = true;
    s.vx = s.vy = 0;
    placa.classList.add('anima');
    // A volta mais próxima: frente em 0°; verso em 180°, girado 90° para ler em pé.
    const alvo = alvoLado === 'verso' ? 180 : 0;
    s.ry = alvo + Math.round((s.ry - alvo) / 360) * 360;
    s.rx = 0;
    s.rz = alvoLado === 'verso' ? -90 : 0;
    s.s = alvoLado === 'verso' ? 0.66 : 1;
    s.aplicar?.();
  };

  return (
    <figure className="m-0">
      <div
        ref={palcoRef}
        className="placa-palco mx-auto grid aspect-[1.25] w-full max-w-[560px] place-items-center rounded-[var(--radius-bloco)] bg-[radial-gradient(closest-side,#e7defb,transparent)] px-[8%]"
        tabIndex={0}
        role="img"
        aria-label="Plaquinha VTX Tap em 3D. Arraste ou use as setas para girar. Frente: QR Code e o convite para aproximar o celular. Verso: o mesmo conteúdo, em pé."
      >
        <div ref={placaRef} className="placa">
          <div className="placa-face">
            <img src="/vtx-tap/cartao-vtx-frente.webp" alt="" width="1712" height="1080" draggable="false" />
          </div>
          <div className="placa-face placa-face--verso">
            <img src="/vtx-tap/cartao-vtx-verso.webp" alt="" width="1080" height="1712" draggable="false" />
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex rounded-full bg-surface-2 p-1" role="group" aria-label="Lado da plaquinha">
          {['frente', 'verso'].map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={lado === l}
              onClick={() => irPara(l)}
              className={`min-h-[38px] rounded-full px-5 text-[15px] font-bold capitalize transition-colors ${
                lado === l ? 'bg-white text-tinta shadow-[var(--shadow-1)]' : 'text-apoio hover:text-tinta'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <span className="text-[14px] text-apoio">Arraste a plaquinha para girar.</span>
      </figcaption>
    </figure>
  );
}
