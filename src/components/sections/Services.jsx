import { Icon } from '../ui/Icon';
import { services, supportServices } from '../../data/services';
import { painPoints } from '../../data/site';

const ICONS = { ghl: 'zap', n8n: 'workflow', dev: 'code' };

/**
 * O que a Vortex faz: primeiro a dor (o visitante se reconhece), depois as
 * três frentes em cartões e os serviços de apoio.
 */
export function Services() {
  return (
    <section className="sec" id="servicos" aria-labelledby="servTitulo" data-reveal>
      <div className="sec-h">
        <p className="kicker">O que fazemos</p>
        <h2 id="servTitulo">Três frentes, uma operação só</h2>
        <p>
          Atendimento e vendas que respondem sozinhos, sistemas que conversam entre si e o produto digital que a operação
          precisa. Você contrata uma frente ou as três, com o mesmo time.
        </p>
      </div>

      <ol className="dores">
        {painPoints.map((d) => (
          <li key={d.service}>
            <span className="dor-txt">“{d.pain}”</span>
            <Icon name="arrow" />
            <span className="dor-fix">{d.fix}</span>
          </li>
        ))}
      </ol>

      <div className="servicos">
        {services.map((s) => (
          <article key={s.id} className="servico">
            <div className="servico-topo">
              <span className="ico">
                <Icon name={ICONS[s.id]} />
              </span>
              <span className="ferramenta">{s.subtitle}</span>
            </div>
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
        ))}
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
