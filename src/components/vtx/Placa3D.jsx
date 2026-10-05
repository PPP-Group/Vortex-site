import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useMediaQuery';

/**
 * A plaquinha padrão em 3D (bloco .c3 da landing do VTX Tap): balança de leve
 * enquanto está na tela, gira ao arrastar (com inércia) e pelas setas, e os
 * botões levam à frente (deitada) ou ao verso (em pé).
 */
export function Placa3D() {
  const palcoRef = useRef(null);
  const cartaoRef = useRef(null);
  const reduced = useReducedMotion();
  const [lado, setLado] = useState('frente');
  const st = useRef({ rx: -8, ry: -24, rz: 0, vx: 0, vy: 0, drag: false, tocou: false, t: 0, x0: 0, y0: 0, raf: 0, visivel: false });

  useEffect(() => {
    const palco = palcoRef.current;
    const cartao = cartaoRef.current;
    if (!palco || !cartao) return undefined;
    const s = st.current;

    const aplicar = () => {
      cartao.style.setProperty('--rx', `${s.rx}deg`);
      cartao.style.setProperty('--ry', `${s.ry}deg`);
      cartao.style.setProperty('--rz', `${s.rz}deg`);
      cartao.style.setProperty('--brilho', `${115 + s.ry * 0.6}deg`);
      const verso = Math.cos((s.ry * Math.PI) / 180) * Math.cos((s.rx * Math.PI) / 180) < 0;
      setLado(verso ? 'verso' : 'frente');
    };
    const laco = () => {
      if (!s.drag) {
        if (!s.tocou && !reduced) {
          s.t += 0.012;
          s.ry = -24 + Math.sin(s.t) * 16;
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
    s.aplicar = aplicar;

    const down = (e) => {
      s.tocou = true;
      s.drag = true;
      s.x0 = e.clientX;
      s.y0 = e.clientY;
      s.vx = s.vy = 0;
      s.rz = 0;
      cartao.style.setProperty('--s', '1');
      cartao.classList.remove('anima');
      palco.setPointerCapture(e.pointerId);
      ligar();
    };
    const move = (e) => {
      if (!s.drag) return;
      e.preventDefault();
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
      cartao.style.setProperty('--s', '1');
      cartao.classList.add('anima');
      s.rx = Math.max(-70, Math.min(70, s.rx + passo[0]));
      s.ry += passo[1];
      aplicar();
    };

    palco.addEventListener('pointerdown', down);
    palco.addEventListener('pointermove', move);
    palco.addEventListener('pointerup', up);
    palco.addEventListener('pointercancel', up);
    palco.addEventListener('keydown', key);
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
    const cartao = cartaoRef.current;
    s.tocou = true;
    s.vx = s.vy = 0;
    cartao.classList.add('anima');
    // A volta mais próxima: a frente em 0°; o verso em 180°, girado 90° para ler em pé.
    const alvo = alvoLado === 'verso' ? 180 : 0;
    s.ry = alvo + Math.round((s.ry - alvo) / 360) * 360;
    s.rx = 0;
    s.rz = alvoLado === 'verso' ? -90 : 0;
    // Em pé, o cartão fica mais alto que largo: encolhe para caber no palco.
    cartao.style.setProperty('--s', alvoLado === 'verso' ? '0.63' : '1');
    s.aplicar?.();
  };

  return (
    <div className="c3">
      <div
        ref={palcoRef}
        className="c3-palco"
        tabIndex={0}
        role="img"
        aria-roledescription="plaquinha em 3D"
        aria-label="Plaquinha padrão do VTX Tap. Frente deitada: QR Code com a logo do VTX Tap e a faixa roxa com Aproxime o celular. Verso em pé: o QR Code em cima e a faixa embaixo. Arraste ou use as setas para girar."
      >
        <div ref={cartaoRef} className="c3-cartao">
          {['-1.5px', '-.5px', '.5px', '1.5px'].map((z) => (
            <span key={z} className="c3-borda" style={{ '--z': z }} />
          ))}
          <div className="c3-face c3-frente">
            <img src="/vtx-tap/cartao-vtx-frente.webp" width="1712" height="1080" alt="" draggable="false" />
            <span className="c3-brilho" />
          </div>
          <div className="c3-face c3-verso">
            <img src="/vtx-tap/cartao-vtx-verso.webp" width="1080" height="1712" alt="" draggable="false" />
            <span className="c3-brilho" />
          </div>
        </div>
      </div>
      <div className="c3-txt">
        <h3>Padrão</h3>
        <p>
          Frente deitada, verso em pé. Os dois lados têm o QR Code com a logo do VTX Tap, o convite para aproximar o
          celular e a dica de ler o QR. O NFC fica embaixo da faixa roxa.
        </p>
        <div className="c3-botoes" role="group" aria-label="Lado da plaquinha">
          {['frente', 'verso'].map((l) => (
            <button key={l} type="button" className="btn btn-linha c3-btn" aria-pressed={lado === l} onClick={() => irPara(l)}>
              {l === 'frente' ? 'Frente' : 'Verso'}
            </button>
          ))}
        </div>
        <p className="c3-dica">Arraste a plaquinha para girar.</p>
      </div>
    </div>
  );
}
