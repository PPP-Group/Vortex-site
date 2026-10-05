import { Section, SectionHeading } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { processSteps } from '../../data/process';
import { principles } from '../../data/site';
import { stackGroups } from '../../data/stack';

/** Prazo só aparece quando a Vortex confirmou; placeholder fica fora da página. */
const temPrazo = (d) => d && !d.includes('[');

/**
 * Como trabalhamos: as quatro etapas (a ordem carrega informação, por isso a
 * numeração), os princípios e as ferramentas, num só lugar.
 */
export function Process() {
  return (
    <Section id="processo" label="Processo">
      <div className="shell">
        <SectionHeading
          kicker="Como trabalhamos"
          title={
            <>
              Do diagnóstico <em>ao repasse</em>
            </>
          }
          lead="Conta o processo, a gente devolve o mapa. Automatizar um processo quebrado só quebra mais rápido, então a ordem é sempre esta."
        />

        <ol className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <li key={s.n} className="cartao flex flex-col p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
              <div className="flex items-center justify-between">
                <span className="display text-[42px] leading-none text-roxo">{s.n}</span>
                {temPrazo(s.duration) && <span className="chip">{s.duration}</span>}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold leading-[1.3]">{s.title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-[1.55] text-apoio">{s.body}</p>
              <p className="mt-5 flex gap-2 border-t border-fio pt-4 text-[13.5px] font-semibold leading-[1.45] text-tinta-2">
                <Icon name="check" className="mt-px h-4 w-4 shrink-0 text-roxo-ink" />
                {s.output}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 md:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="kicker" data-reveal>
              Princípios
            </p>
            <h2 className="display display-secao mt-3" data-reveal>
              A operação <em>fica com você</em>
            </h2>
            <div className="mt-8" data-reveal>
              <p className="kicker !text-apoio">Ferramentas do dia a dia</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stackGroups.flatMap((g) => g.items).map((t) => (
                  <li key={t.name} className="chip !bg-white shadow-[inset_0_0_0_1px_var(--color-fio)]" title={t.role}>
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="grid gap-3.5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="rounded-[var(--radius-lg)] bg-surface-2 p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
                <h3 className="text-[17px] font-semibold leading-[1.3]">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-apoio">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
