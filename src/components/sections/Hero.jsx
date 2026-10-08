import { Icon } from '../ui/Icon';
import { manifesto } from '../../data/site';

/** As três frentes da Vortex, em etiquetas em volta do mascote. */
const frentes = [
  { icon: 'zap', titulo: 'Automação e CRM', sub: 'atendimento e vendas', cls: 'hero-etq--a' },
  { icon: 'workflow', titulo: 'Integrações', sub: 'sistemas conversando', cls: 'hero-etq--b' },
  { icon: 'code', titulo: 'Sites e apps', sub: 'o produto da operação', cls: 'hero-etq--c' },
];

/**
 * Hero da Vortex: bloco noite com anéis, o manifesto e o polvo (o mascote)
 * à direita, como ilustração de site — o uso que o manual de marca prevê.
 */
export function Hero() {
  return (
    <section className="hero hero--vortex" id="topo" aria-labelledby="heroTitulo">
      <div className="hero-txt">
        <p className="kicker" style={{ color: 'var(--lilas)' }}>
          Vortex Systems · tecnologia para a operação
        </p>
        <h1 id="heroTitulo">
          {manifesto.lines[0]} {manifesto.lines[1]} <em>{manifesto.lines[2]}</em>
        </h1>
        <p className="hero-sub">
          <b>CRM e automação de atendimento e vendas</b>, <b>integração entre sistemas</b> e o{' '}
          <b>site, plataforma ou app</b> que a operação precisa. A gente desenha, constrói e entrega funcionando, com a
          sua equipe treinada para operar.
        </p>
        <div className="ctas">
          <a className="btn btn-ouro" href="#contato">
            Falar com a equipe
            <Icon name="arrow" />
          </a>
          <a className="btn btn-linha" href="#servicos">
            Ver os serviços
          </a>
        </div>
        <ul className="selos">
          {['Diagnóstico antes da ferramenta', 'A operação fica com você', 'Atendimento em todo o Brasil'].map((t) => (
            <li key={t}>
              <Icon name="check" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-polvo" aria-hidden="true">
        <img className="polvo" src="/marca/polvo-roxo.svg" alt="" width="240" height="223" />
        {frentes.map((f) => (
          <span key={f.titulo} className={`hero-etq ${f.cls}`}>
            <span className="etq-ico">
              <Icon name={f.icon} />
            </span>
            <span>
              {f.titulo}
              <small>{f.sub}</small>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
