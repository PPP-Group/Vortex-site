import { useState } from 'react';
import { Section, SectionHeading } from '../ui/Section';
import { Icon, IconTile } from '../ui/Icon';
import { services, supportServices } from '../../data/services';
import { painPoints } from '../../data/site';

const ICONS = { ghl: 'zap', n8n: 'workflow', dev: 'code' };
const SUPPORT_ICONS = ['search', 'users', 'wrench'];

/**
 * Serviços: a dor antes da ferramenta. Cada cartão abre com a dor, depois diz
 * o que fazemos, e a lista completa de capacidades fica a um toque.
 */
export function Services() {
  return (
    <Section id="servicos" label="Serviços">
      <div className="shell">
        <SectionHeading
          kicker="O que mais fazemos"
          title={
            <>
              Automação, integração <em>e o produto digital</em>
            </>
          }
          lead="Duas frentes que a maioria contrata em lugares diferentes. Automação sem produto digital vira remendo; produto sem automação vira trabalho manual. A gente entrega os dois lados."
        />

        <div className="mt-10 grid gap-3.5 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} pain={painPoints.find((p) => p.service === s.id)} delay={i * 80} />
          ))}
        </div>

        <ul className="mt-3.5 grid gap-3.5 md:grid-cols-3">
          {supportServices.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-[var(--radius-lg)] bg-surface-2 p-[22px]" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-icone)] bg-white text-roxo-ink">
                <Icon name={SUPPORT_ICONS[i]} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[16.5px] font-semibold leading-[1.3]">{s.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-apoio">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function ServiceCard({ service, pain, delay }) {
  const [aberto, setAberto] = useState(false);
  const curtas = service.capabilities.slice(0, 3);
  const resto = service.capabilities.slice(3);
  const painelId = `cap-${service.id}`;

  return (
    <article className="cartao flex flex-col p-[22px]" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <div className="flex items-start justify-between gap-4">
        <IconTile name={ICONS[service.id]} />
        <span className="chip">{service.subtitle}</span>
      </div>

      {pain && (
        <p className="mt-6 text-[14.5px] font-semibold leading-[1.4] text-roxo-ink">“{pain.pain}”</p>
      )}
      <h3 className="display display-cartao mt-2">{service.title}</h3>
      <p className="mt-3 text-[15.5px] leading-[1.55] text-tinta-2">{service.lead}</p>

      <ul className="mt-5 grid gap-2.5 border-t border-fio pt-5">
        {curtas.map((c) => (
          <li key={c} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-tinta-2">
            <Icon name="check" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-roxo-ink" />
            {c}
          </li>
        ))}
      </ul>

      {resto.length > 0 && (
        <>
          <div id={painelId} hidden={!aberto}>
            <ul className="mt-2.5 grid gap-2.5">
              {resto.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-tinta-2">
                  <Icon name="check" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-roxo-ink" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls={painelId}
            onClick={() => setAberto((v) => !v)}
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[14.5px] font-bold text-roxo-ink hover:underline"
          >
            {aberto ? 'Mostrar menos' : `Ver mais ${resto.length} capacidades`}
            <Icon name={aberto ? 'arrow' : 'plus'} className={`h-4 w-4 ${aberto ? '-rotate-90' : ''}`} />
          </button>
        </>
      )}
    </article>
  );
}
