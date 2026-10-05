import { Icon } from '../ui/Icon';
import { services, supportServices } from '../../data/services';
import { painPoints, manifesto } from '../../data/site';

const ICONS = { ghl: 'zap', n8n: 'workflow', dev: 'code' };

/**
 * A Vortex além do VTX Tap: a assinatura, o manifesto e as três frentes, na
 * mesma gramática dos cartões da landing. A dor vem antes da ferramenta.
 */
export function Services() {
  return (
    <section className="vortex-intro" id="servicos" aria-labelledby="servTitulo" data-reveal>
      <img className="assin" src="/marca/assinatura-cor.svg" alt="Vortex" width="204" height="34" />
      <div className="sec-h">
        <p className="kicker">Além do VTX Tap</p>
        <h2 id="servTitulo">
          {manifesto.lines.join(' ')}
        </h2>
        <p>{manifesto.body}</p>
      </div>

      <div className="servicos">
        {services.map((s) => {
          const dor = painPoints.find((p) => p.service === s.id);
          return (
            <article key={s.id} className="servico">
              <div className="servico-topo">
                <span className="ico">
                  <Icon name={ICONS[s.id]} />
                </span>
                <span className="ferramenta">{s.subtitle}</span>
              </div>
              {dor && <p className="dor">“{dor.pain}”</p>}
              <h3>{s.title}</h3>
              <p>{s.lead}</p>
              <ul>
                {s.capabilities.slice(0, 5).map((c) => (
                  <li key={c}>
                    <Icon name="check" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="apoio">
        {supportServices.map((s) => (
          <div key={s.title}>
            <b>{s.title}</b>
            <span>{s.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
