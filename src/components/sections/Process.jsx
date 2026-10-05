import { Icon } from '../ui/Icon';
import { processSteps } from '../../data/process';
import { principles } from '../../data/site';
import { stackGroups } from '../../data/stack';

/** Como a Vortex trabalha: as quatro etapas, os princípios e as ferramentas. */
export function Process() {
  return (
    <section className="sec" id="processo" aria-labelledby="procTitulo" data-reveal>
      <div className="sec-h">
        <p className="kicker">Como trabalhamos</p>
        <h2 id="procTitulo">Conta o processo, a gente devolve o mapa</h2>
        <p>Automatizar um processo quebrado só quebra mais rápido. Por isso a ordem é sempre esta.</p>
      </div>

      <div className="passos passos--num">
        {processSteps.map((s) => (
          <article key={s.n} className="passo">
            <span className="n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="saida">
              <Icon name="check" />
              {s.output}
            </span>
          </article>
        ))}
      </div>

      <div className="cols3">
        {principles.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p className="muted" style={{ fontSize: 15 }}>
              {p.body}
            </p>
          </article>
        ))}
      </div>

      <div className="ferramentas" aria-label="Ferramentas do dia a dia">
        {stackGroups
          .flatMap((g) => g.items)
          .map((t) => (
            <span key={t.name} title={t.role}>
              {t.name}
            </span>
          ))}
      </div>
    </section>
  );
}
