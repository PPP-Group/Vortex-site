import { axes, brand } from '../../data/site';

/**
 * Sobre a Vortex: o polvo (mascote) como ilustração, ao lado das duas frentes
 * que a maioria contrata em lugares diferentes. Do site anterior, a ideia de
 * convergência: automação e produto entregues pelo mesmo time.
 */
export function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="sobreTitulo" data-reveal>
      <div className="sobre-polvo" aria-hidden="true">
        <img src="/marca/polvo-roxo.svg" alt="" width="240" height="223" loading="lazy" />
      </div>
      <div className="sobre-txt">
        <div className="sec-h">
          <p className="kicker">Sobre a Vortex</p>
          <h2 id="sobreTitulo">Duas frentes que a maioria contrata em lugares diferentes</h2>
          <p>{brand.short}</p>
        </div>
        <div className="eixos">
          {axes.map((a) => (
            <article key={a.key} className="card">
              <h3>{a.label}</h3>
              <p className="muted" style={{ fontSize: 15 }}>
                {a.body}
              </p>
              <div className="eixo-ferramentas">
                {a.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="sobre-frase">
          Automação sem produto digital vira remendo. Produto sem automação vira trabalho manual.{' '}
          <b>A Vortex entrega os dois lados</b>, e ninguém precisa traduzir o escopo de um fornecedor para o outro.
        </p>
      </div>
    </section>
  );
}
