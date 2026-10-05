import { Button, ArrowRight } from '../ui/Button';
import { Icon, IconTile } from '../ui/Icon';
import { manifesto } from '../../data/site';

/** As quatro frentes, logo abaixo do hero: o VTX Tap primeiro, por ser o lançamento. */
const fronts = [
  { href: '#vtx-tap', icon: 'nfc', title: 'VTX Tap', body: 'Plaquinha NFC na mesa: garçom, cardápio, fidelidade e delivery.', novo: true },
  { href: '#servicos', icon: 'zap', title: 'Automação e CRM', body: 'Atendimento e vendas que respondem sozinhos, inclusive por voz.' },
  { href: '#servicos', icon: 'workflow', title: 'Integrações', body: 'Os sistemas que já existem, finalmente conversando.' },
  { href: '#portfolio', icon: 'code', title: 'Sites e plataformas', body: 'O site, o sistema ou o app que a operação precisa.' },
];

/**
 * Hero: bloco noite com anéis (o grafismo-assinatura) e a palavra em ênfase em
 * lilás. À direita, o VTX Tap em uso: a plaquinha e a tela do sino.
 */
export function Hero() {
  return (
    <section id="topo" aria-label="Início" className="pt-[calc(var(--header-h)+4px)]">
      <div className="mx-auto w-[min(1240px,100%-24px)]">
        <div className="bloco bloco--noite sobre-noite grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:py-16">
          <span aria-hidden="true" className="aneis -right-[150px] -top-[150px] [--aneis:460px]" />

          <div className="max-w-[640px]">
            <a
              href="#vtx-tap"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-[14px] font-semibold text-noite-ink transition-colors hover:bg-white/15"
              data-reveal
            >
              <span className="rounded-full bg-ouro px-2.5 py-0.5 text-[11.5px] font-bold uppercase tracking-[0.06em] text-on-ouro">
                Novo
              </span>
              VTX Tap: a mesa inteira no celular do cliente
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <h1 className="display display-hero mt-6" data-reveal>
              {manifesto.lines[0]} {manifesto.lines[1]} <em>{manifesto.lines[2]}</em>
            </h1>

            <p className="lead mt-6 max-w-[54ch] text-noite-2" data-reveal>
              {manifesto.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <Button as="a" href="#contato">
                Falar com a equipe
                <ArrowRight />
              </Button>
              <Button as="a" href="#vtx-tap" variant="linha" className="text-white">
                Conhecer o VTX Tap
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>

        <ul className="mt-3.5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {fronts.map((f, i) => (
            <li key={f.title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <a href={f.href} className="cartao cartao-link flex h-full gap-4 p-[22px]">
                <IconTile name={f.icon} />
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-[17px] font-semibold leading-tight text-tinta">
                    {f.title}
                    {f.novo && <span className="selo !px-2 !py-px !text-[10.5px]">Novo</span>}
                  </span>
                  <span className="mt-1.5 block text-[14.5px] leading-[1.5] text-apoio">{f.body}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** A plaquinha deitada atrás e o celular com a tela do sino na frente. */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[500px]" data-reveal="scale" aria-hidden="true">
      <img
        src="/vtx-tap/cartao-vtx-frente.webp"
        alt=""
        width="1712"
        height="1080"
        className="absolute -left-[2%] top-[6%] w-[74%] -rotate-[8deg] rounded-[5.5%/8.7%] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.6)]"
      />
      <div className="aparelho absolute bottom-0 right-0 w-[40%] rotate-[4deg]">
        <img src="/vtx-tap/sino.webp" alt="" width="600" height="1299" className="aspect-[600/1180]" />
      </div>
      <div className="absolute bottom-[14%] left-[2%] flex items-center gap-3 rounded-[16px] bg-white py-2.5 pl-2.5 pr-4 text-tinta shadow-[0_22px_48px_-18px_rgba(0,0,0,0.6)]">
        <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-ouro text-on-ouro">
          <Icon name="bell" className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-[14px] font-bold leading-tight">Mesa 07 chamou</span>
          <span className="block text-[12.5px] text-apoio">
            Fechar a conta · <span className="num">00:12</span>
          </span>
        </span>
      </div>
    </div>
  );
}
