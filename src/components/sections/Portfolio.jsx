import { lazy, Suspense, useState } from 'react';
import { Section, SectionHeading } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { ProjectCover } from '../portfolio/ProjectCover';
import { projects } from '../../data/portfolio';

/* O modal só é baixado quando alguém abre um projeto. */
const ProjectModal = lazy(() => import('../portfolio/ProjectModal').then((m) => ({ default: m.ProjectModal })));

/**
 * Portfólio. O primeiro cartão (o VTX Tap) ocupa duas colunas; cada cartão
 * abre um diálogo com o site rodando dentro, quando o domínio permite.
 */
export function Portfolio() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((p) => p.id === activeId) || null;

  return (
    <Section id="portfolio" label="Portfólio" className="bg-white">
      <div className="shell">
        <SectionHeading
          kicker="Portfólio"
          title={
            <>
              Sites, plataformas e apps <em>que a operação usa</em>
            </>
          }
          lead="Abra um projeto para navegar por ele aqui dentro."
        />

        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={i === 0 ? 'sm:col-span-2' : ''}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i % 3, 2) * 80}ms` }}
            >
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                className={`cartao cartao-link group flex h-full w-full overflow-hidden bg-nevoa text-left ${
                  i === 0 ? 'flex-col lg:flex-row' : 'flex-col'
                }`}
              >
                <span className={`relative block overflow-hidden ${i === 0 ? 'lg:w-[58%] lg:shrink-0' : ''}`}>
                  <ProjectCover project={project} className={i === 0 ? 'aspect-[16/10] h-full' : 'aspect-[16/10]'} />
                  {project.demo && <span className="selo absolute left-3 top-3 bg-white">Exemplo</span>}
                </span>

                <span className="flex flex-1 flex-col p-[22px]">
                  <span className="flex items-center justify-between gap-3 text-[12.5px] font-bold uppercase tracking-[0.12em] text-roxo-ink">
                    <span>{project.category}</span>
                    {!project.year.includes('[') && <span className="num font-semibold tracking-normal text-apoio">{project.year}</span>}
                  </span>
                  <span className={`mt-3 block font-semibold leading-[1.25] text-tinta ${i === 0 ? 'text-[24px]' : 'text-[19px]'}`}>
                    {project.title}
                  </span>
                  <span className="mt-2 block flex-1 text-[14.5px] leading-[1.5] text-apoio">{project.summary}</span>
                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip !bg-white !py-1 !text-[12.5px]">
                        {tech}
                      </span>
                    ))}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-roxo-ink">
                    Ver projeto
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <Suspense fallback={null}>
          <ProjectModal project={active} open onClose={() => setActiveId(null)} />
        </Suspense>
      )}
    </Section>
  );
}
