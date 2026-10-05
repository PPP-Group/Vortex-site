import { lazy, Suspense, useState } from 'react';
import { WorkflowGraph } from '../graph/WorkflowGraph';
import { Icon } from '../ui/Icon';
import { demoFlow, automationCases } from '../../data/automations';

const CaseModal = lazy(() => import('../automation/CaseModal').then((m) => ({ default: m.CaseModal })));

/**
 * Automação em execução, num bloco noite: o fluxo de um lead roda uma vez ao
 * entrar na tela e pode ser reproduzido. Abaixo, três casos que resolvemos assim.
 */
export function AutomationDemo() {
  const [playSignal, setPlaySignal] = useState(0);
  const [openCase, setOpenCase] = useState(null);

  return (
    <section id="automacao" aria-label="Automação" className="py-[72px] md:py-24">
      <div className="mx-auto w-[min(1240px,100%-24px)]">
        <div className="bloco bloco--noite sobre-noite lg:py-14">
          <span aria-hidden="true" className="aneis -right-[160px] -top-[160px] [--aneis:440px]" />

          <div className="mx-auto max-w-[1120px]">
            <header className="max-w-3xl">
              <p className="kicker" data-reveal>
                Automação comercial
              </p>
              <h2 className="display display-secao mt-3" data-reveal>
                Lead que espera esfria. <em>O nosso não espera.</em>
              </h2>
              <p className="mt-[18px] max-w-[62ch] text-[17px] leading-[1.55] text-noite-2" data-reveal>
                Um lead entrando, do formulário ao pipeline. Onde o fluxo se divide, é uma condição decidindo, não um
                disparo igual para todo mundo.
              </p>
            </header>

            <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-preto" data-reveal="scale">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
                <p className="flex items-center gap-2.5 text-[13px] font-semibold text-noite-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ok" />
                  Fluxo · captação e qualificação
                </p>
                <button
                  type="button"
                  onClick={() => setPlaySignal((n) => n + 1)}
                  className="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-white/10 px-4 text-[14px] font-bold text-white transition-colors hover:bg-white/15"
                >
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                    <path d="M2 1.5v9l8-4.5-8-4.5z" />
                  </svg>
                  Reproduzir
                </button>
              </div>
              <div className="canvas-grid px-3 py-8 md:px-8 md:py-12">
                <WorkflowGraph
                  flow={demoFlow}
                  autoPlay
                  loop={false}
                  playSignal={playSignal}
                  description="Um lead preenche o formulário, é enriquecido e classificado por IA. Se a intenção é alta, a Voice AI liga e agenda; se é baixa, entra numa sequência de nutrição. Os dois caminhos terminam no pipeline."
                />
              </div>
            </div>

            <p className="kicker mt-12" data-reveal>
              Três problemas que resolvemos assim
            </p>
            <div className="mt-5 grid gap-3.5 md:grid-cols-3">
              {automationCases.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOpenCase(item)}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] bg-white/[0.07] p-[22px] text-left transition-colors hover:bg-white/[0.11]"
                  data-reveal
                  style={{ '--reveal-delay': `${i * 80}ms` }}
                >
                  <span className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-ouro">{item.kicker}</span>
                  <span className="mt-3 block text-[19px] font-semibold leading-[1.3] text-white">{item.title}</span>
                  <span className="mt-2 block flex-1 text-[14.5px] leading-[1.5] text-noite-2">{item.problem}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-lilas">
                    Ver como resolvemos
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openCase && (
        <Suspense fallback={null}>
          <CaseModal item={openCase} open onClose={() => setOpenCase(null)} />
        </Suspense>
      )}
    </section>
  );
}
