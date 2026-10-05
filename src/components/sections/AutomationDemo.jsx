import { lazy, Suspense, useState } from 'react';
import { WorkflowGraph } from '../graph/WorkflowGraph';
import { demoFlow, automationCases } from '../../data/automations';

const CaseModal = lazy(() => import('../automation/CaseModal').then((m) => ({ default: m.CaseModal })));

/**
 * Automação comercial num bloco noite, como os blocos da landing: o fluxo de
 * um lead roda uma vez ao entrar na tela, e abaixo ficam três casos.
 */
export function AutomationDemo() {
  const [playSignal, setPlaySignal] = useState(0);
  const [openCase, setOpenCase] = useState(null);

  return (
    <section className="destaque destaque--noite" id="automacao" aria-labelledby="autoTitulo" data-reveal>
      <div className="sec-h">
        <p className="kicker">Automação comercial · GoHighLevel e n8n</p>
        <h2 id="autoTitulo">Lead que espera esfria. O nosso não espera.</h2>
        <p>
          Um lead entrando, do formulário ao pipeline. Onde o fluxo se divide, é uma condição decidindo, não um disparo
          igual para todo mundo.
        </p>
      </div>

      <div className="canvas">
        <div className="canvas-barra">
          <span className="vivo">Fluxo · captação e qualificação</span>
          <button type="button" className="btn btn-linha" onClick={() => setPlaySignal((n) => n + 1)}>
            Reproduzir
          </button>
        </div>
        <div className="canvas-grafo">
          <WorkflowGraph
            flow={demoFlow}
            autoPlay
            loop={false}
            playSignal={playSignal}
            description="Um lead preenche o formulário, é enriquecido e classificado por IA. Se a intenção é alta, a Voice AI liga e agenda; se é baixa, entra numa sequência de nutrição. Os dois caminhos terminam no pipeline."
          />
        </div>
      </div>

      <div className="modos">
        {automationCases.map((item) => (
          <button key={item.id} type="button" className="modo" onClick={() => setOpenCase(item)}>
            <span className="ex">{item.kicker}</span>
            <h4>{item.title}</h4>
            <p>{item.problem}</p>
            <span className="mais">Ver como resolvemos →</span>
          </button>
        ))}
      </div>

      {openCase && (
        <Suspense fallback={null}>
          <CaseModal item={openCase} open onClose={() => setOpenCase(null)} />
        </Suspense>
      )}
    </section>
  );
}
