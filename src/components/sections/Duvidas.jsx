import { faq } from '../../data/site';

/** Perguntas frequentes sobre a Vortex (o mesmo conteúdo vai para o FAQPage do JSON-LD). */
export function Duvidas() {
  return (
    <section className="sec" id="duvidas" aria-labelledby="faqTitulo" data-reveal>
      <div className="sec-h centro">
        <p className="kicker">Dúvidas</p>
        <h2 id="faqTitulo">Perguntas frequentes</h2>
      </div>
      <div className="faq">
        {faq.map(([q, r]) => (
          <details key={q}>
            <summary>{q}</summary>
            <div>
              <p>{r}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
