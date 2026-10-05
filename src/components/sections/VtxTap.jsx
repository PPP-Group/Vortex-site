import { useId, useRef, useState } from 'react';
import { Section } from '../ui/Section';
import { Button, ArrowRight, WhatsAppIcon } from '../ui/Button';
import { Icon, IconTile } from '../ui/Icon';
import { VtxTapLogo } from '../layout/Logo';
import { Placa3D } from '../vtxtap/Placa3D';
import { vtxTap, vtxSteps, vtxModules, vtxExtras, vtxPlans, vtxCombo, vtxImplantacao } from '../../data/vtxtap';
import { contact } from '../../data/site';

/**
 * VTX Tap — o lançamento, com o maior espaço da página.
 *
 * Ordem: o que é e como funciona (claro) → a plataforma por dentro (bloco
 * noite, com as telas reais) → a plaquinha em 3D → preços → chamada no bloco
 * roxo, o único da página.
 */
export function VtxTap() {
  return (
    <Section id="vtx-tap" label="VTX Tap" className="!pb-6">
      <div className="shell">
        <Intro />
        <Steps />
      </div>

      <div className="mx-auto mt-14 w-[min(1240px,100%-24px)] md:mt-20">
        <Explorer />
      </div>

      <div className="shell">
        <Extras />
        <Plaquinha />
        <Precos />
      </div>

      <div className="mx-auto mt-14 w-[min(1240px,100%-24px)] md:mt-20">
        <ChamadaRoxa />
      </div>
    </Section>
  );
}

function Intro() {
  return (
    <header>
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3" data-reveal>
          <VtxTapLogo className="h-14 w-auto md:h-16" />
          <img src="/marca/endosso-cor.svg" alt="uma solução Vortex" className="h-3 w-auto" />
        </div>
        <p className="kicker mt-8" data-reveal>
          Novo · para bares e restaurantes
        </p>
        <h2 className="display display-secao mt-3" data-reveal>
          Uma plaquinha na mesa. <em>O restaurante inteiro no celular.</em>
        </h2>
        <p className="mt-[18px] max-w-[62ch] text-[17px] leading-[1.55] text-apoio" data-reveal>
          O cliente encosta o celular na plaquinha e chama o garçom, vê o cardápio, junta pontos no clube e avalia
          no Google. Sem aplicativo para baixar. A equipe recebe tudo num painel só.
        </p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2" data-reveal>
        {['Sem comissão por pedido', 'Funciona com qualquer caixa', 'Implantação e treinamento inclusos'].map((t) => (
          <li key={t} className="selo">
            {t}
          </li>
        ))}
      </ul>
    </header>
  );
}

function Steps() {
  return (
    <ol className="mt-12 grid gap-3.5 md:grid-cols-3">
      {vtxSteps.map((s, i) => (
        <li key={s.title} className="cartao p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
          <div className="flex items-center justify-between">
            <IconTile name={s.icon} />
            <span className="num text-[15px] font-semibold text-roxo-ink">0{i + 1}</span>
          </div>
          <h3 className="mt-5 text-[19px] font-semibold leading-[1.3]">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.55] text-apoio">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/**
 * A plataforma por dentro: abas à esquerda, a tela real no aparelho à direita.
 * Abas acessíveis (setas, Home e End trocam a aba).
 */
function Explorer() {
  const [ativo, setAtivo] = useState(vtxModules[0].id);
  const tabsRef = useRef([]);
  const base = useId();
  const modulo = vtxModules.find((m) => m.id === ativo);
  const paisagem = modulo.formato === 'paisagem';

  const onKeyDown = (e, i) => {
    const n = vtxModules.length;
    const alvo = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: n - 1 }[e.key];
    if (alvo === undefined) return;
    e.preventDefault();
    const j = (alvo + n) % n;
    setAtivo(vtxModules[j].id);
    tabsRef.current[j]?.focus();
  };

  return (
    <div className="bloco bloco--noite sobre-noite lg:py-14">
      <span aria-hidden="true" className="aneis -bottom-[170px] -left-[170px] [--aneis:440px]" />

      <div className="mx-auto max-w-[1120px]">
        <header className="max-w-2xl">
          <p className="kicker" data-reveal>
            A plataforma por dentro
          </p>
          <h3 className="display display-secao mt-3" data-reveal>
            Tudo o que abre <em>quando o cliente encosta</em>
          </h3>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <div
            role="tablist"
            aria-label="Módulos do VTX Tap"
            aria-orientation="vertical"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {vtxModules.map((m, i) => {
              const sel = m.id === ativo;
              return (
                <button
                  key={m.id}
                  ref={(el) => (tabsRef.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`${base}-tab-${m.id}`}
                  aria-selected={sel}
                  aria-controls={`${base}-painel`}
                  tabIndex={sel ? 0 : -1}
                  onClick={() => setAtivo(m.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`flex shrink-0 items-center gap-3 rounded-[16px] px-3 py-2.5 text-left text-[15.5px] font-semibold transition-colors ${
                    sel ? 'bg-white text-tinta' : 'text-noite-ink hover:bg-white/10'
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-[11px] ${
                      sel ? 'bg-roxo text-white' : 'bg-white/10 text-ouro'
                    }`}
                  >
                    <Icon name={m.icon} className="h-5 w-5" />
                  </span>
                  {m.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${base}-painel`}
            aria-labelledby={`${base}-tab-${modulo.id}`}
            className={`grid items-center gap-8 lg:min-h-[540px] ${paisagem ? '' : 'md:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_280px]'}`}
          >
            <div key={modulo.id} className="animate-[entra_.45s_var(--ease-out-soft)]">
              <h4 className="display display-cartao text-white">{modulo.title}</h4>
              <p className="mt-3 max-w-[52ch] text-[16.5px] leading-[1.55] text-noite-2">{modulo.body}</p>
              <ul className="mt-5 grid gap-2.5">
                {modulo.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[15px] text-noite-ink">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-ouro" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {paisagem ? (
              <div key={modulo.tela} className="overflow-hidden rounded-[18px] border-[6px] border-[#0c0820] bg-white shadow-[var(--shadow-aparelho)] animate-[entra_.45s_var(--ease-out-soft)]">
                <img src={modulo.tela} alt={modulo.alt} width="1600" height="1012" loading="lazy" className="block w-full" />
              </div>
            ) : (
              <div key={modulo.tela} className="aparelho mx-auto w-[min(260px,72vw)] animate-[entra_.45s_var(--ease-out-soft)] md:w-full">
                <img src={modulo.tela} alt={modulo.alt} width="600" height="1299" loading="lazy" className="aspect-[600/1180]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Extras() {
  return (
    <ul className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      {vtxExtras.map((x, i) => (
        <li key={x.title} className="cartao flex gap-4 p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
          <IconTile name={x.icon} />
          <div>
            <h3 className="text-[16.5px] font-semibold leading-[1.3]">{x.title}</h3>
            <p className="mt-1.5 text-[14.5px] leading-[1.5] text-apoio">{x.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Plaquinha() {
  return (
    <div className="mt-20 grid items-center gap-12 md:mt-28 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="kicker" data-reveal>
          As plaquinhas
        </p>
        <h3 className="display display-secao mt-3" data-reveal>
          Pequenas, bonitas, <em>com NFC e QR</em>
        </h3>
        <p className="mt-[18px] max-w-[52ch] text-[17px] leading-[1.55] text-apoio" data-reveal>
          Do tamanho de um cartão de crédito (8,6 × 5,4 cm), impressas dos dois lados. Chegam prontas: para ligar cada
          uma, alguém da equipe aproxima o celular e escolhe a mesa, em menos de 10 segundos.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3.5" data-reveal>
          {[
            { src: '/vtx-tap/placa-personalizada-basica.webp', t: 'Personalizada', d: 'A logo no QR e a faixa na cor do restaurante.' },
            { src: '/vtx-tap/placa-sob-demanda.webp', t: 'Sob demanda', d: 'A arte é do restaurante; o QR e o convite continuam.' },
          ].map((p) => (
            <figure key={p.t} className="cartao overflow-hidden">
              <img src={p.src} alt={`Plaquinha ${p.t.toLowerCase()}`} width="1200" height="757" loading="lazy" className="block w-full bg-surface-2" />
              <figcaption className="p-4">
                <span className="block text-[15px] font-semibold">{p.t}</span>
                <span className="mt-1 block text-[13.5px] leading-[1.45] text-apoio">{p.d}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div data-reveal="scale">
        <Placa3D />
      </div>
    </div>
  );
}

const brl = (v) => `R$ ${v.toLocaleString('pt-BR')}`;

function Precos() {
  return (
    <div className="mt-20 md:mt-28">
      <header className="max-w-3xl">
        <p className="kicker" data-reveal>
          Preços
        </p>
        <h3 className="display display-secao mt-3" data-reveal>
          Pague só <em>pelo que usar</em>
        </h3>
        <p className="mt-[18px] max-w-[62ch] text-[17px] leading-[1.55] text-apoio" data-reveal>
          Mensalidade por serviço, sem comissão e sem cobrança por cliente ou por pedido. Comece com um e some outro
          depois, com desconto.
        </p>
      </header>

      <div className="mt-10 grid gap-3.5 lg:grid-cols-[1fr_1fr_0.95fr]">
        <ul className="grid gap-3.5 sm:grid-cols-2 lg:col-span-2">
          {vtxPlans.map((p, i) => (
            <li key={p.id} className="cartao flex flex-col p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <h4 className="text-[19px] font-semibold leading-[1.3]">{p.name}</h4>
              <p className="mt-1.5 flex-1 text-[14.5px] leading-[1.5] text-apoio">{p.desc}</p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="display text-[42px] leading-none text-tinta">{brl(p.price)}</span>
                <span className="text-[14.5px] text-apoio">/mês</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="cartao cartao--plano flex flex-col p-[22px]" data-reveal>
          <span className="selo w-fit bg-white">Combo</span>
          <h4 className="mt-4 text-[19px] font-semibold leading-[1.3]">{vtxCombo.title}</h4>
          <p className="mt-4 flex items-baseline gap-1.5">
            <span className="display text-[64px] leading-none text-roxo-ink">{brl(vtxCombo.price)}</span>
            <span className="text-[15px] text-tinta-2">/mês</span>
          </p>
          <p className="mt-3 text-[14.5px] leading-[1.5] text-tinta-2">{vtxCombo.note}</p>
          <p className="mt-auto border-t border-roxo/20 pt-4 text-[14px] leading-[1.5] text-tinta-2">{vtxImplantacao}</p>
          <Button as="a" href={vtxTap.orcamento} target="_blank" rel="noopener noreferrer" className="mt-5">
            Montar meu orçamento
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChamadaRoxa() {
  return (
    <div className="bloco bloco--roxo sobre-roxo lg:py-14">
      <span aria-hidden="true" className="aneis aneis--branco -bottom-[180px] -left-[140px] [--aneis:400px]" />
      <div className="mx-auto w-full max-w-[1120px] md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        <div>
          <VtxTapLogo esquema="branco" className="h-11 w-auto" />
          <h3 className="display display-secao mt-6 max-w-[16ch] text-white">Veja o VTX Tap funcionando no seu restaurante</h3>
          <p className="mt-4 max-w-[54ch] text-[18px] leading-[1.55] text-white">
            Mostramos o sistema, montamos o orçamento para o seu número de mesas e tiramos as dúvidas. Sem compromisso.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col">
          <Button as="a" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" variant="branco">
            <WhatsAppIcon />
            Falar com a gente
          </Button>
          <Button as="a" href={vtxTap.site} target="_blank" rel="noopener noreferrer" variant="linha" className="text-white">
            Ver o site do VTX Tap
            <Icon name="external" className="h-[18px] w-[18px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
