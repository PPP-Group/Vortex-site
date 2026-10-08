import { lazy, Suspense, useState } from 'react';
import { projects } from '../../data/portfolio';

/* O diálogo só é baixado quando alguém abre um projeto. */
const ProjectModal = lazy(() => import('../portfolio/ProjectModal').then((m) => ({ default: m.ProjectModal })));

/** Portfólio: cartões claros com a capa real de cada site; o VTX Tap abre a grade. */
export function Portfolio() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((p) => p.id === activeId) || null;

  return (
    <section className="sec" id="portfolio" aria-labelledby="portTitulo" data-reveal>
      <div className="sec-h">
        <p className="kicker">Portfólio</p>
        <h2 id="portTitulo">Sites, plataformas e apps que já estão no ar</h2>
        <p>Abra um projeto para navegar por ele aqui dentro.</p>
      </div>

      <div className="port">
        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            className="proj"
            onClick={() => setActiveId(p.id)}
          >
            <span className="proj-capa">
              <img src={p.cover} alt="" loading="lazy" />
              {p.demo && <span className="tag">Exemplo</span>}
            </span>
            <span className="proj-corpo">
              <span className="proj-cat">
                <span>{p.category}</span>
                {!p.year.includes('[') && <span className="num">{p.year}</span>}
              </span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="stack">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
              <span className="mais">Ver projeto →</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <Suspense fallback={null}>
          <ProjectModal project={active} open onClose={() => setActiveId(null)} />
        </Suspense>
      )}
    </section>
  );
}
