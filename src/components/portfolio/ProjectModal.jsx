import { useId } from 'react';
import { Modal } from '../ui/Modal';
import { ProjectCover } from './ProjectCover';

/**
 * Modal de projeto: a capa do site (print da própria hero), o que foi feito e
 * o resultado. O site em si abre em nova aba.
 *
 * Antes havia um preview navegável num iframe, mas ele não se mostrou
 * confiável (sites com muitas imagens demoram a carregar, e não dá para saber
 * do lado do cliente se o embed funcionou). A capa sempre funciona.
 */
export function ProjectModal({ project, open, onClose }) {
  const titleId = useId();
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId}>
      <header className="flex shrink-0 flex-wrap items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-7 md:py-5">
        <div className="min-w-0">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-volt">{project.category}</span>
            {!project.year.includes('[') && (
              <>
                <span aria-hidden="true" className="text-faint">
                  ·
                </span>
                <span>{project.year}</span>
              </>
            )}
          </p>
          <h2 id={titleId} className="display mt-2 text-xl text-paper md:text-2xl">
            {project.title}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-faint"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            data-autofocus
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-paper transition-colors hover:border-volt/60"
          >
            <span className="sr-only">Fechar</span>
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto] overflow-y-auto lg:grid-cols-[1fr_20rem] lg:grid-rows-1">
        <div className="relative flex min-h-[42vh] flex-col bg-ink-200 lg:min-h-0">
          <ProjectCover project={project} className="flex-1" />
          {project.externalUrl && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-ink-100 px-5 py-4 md:px-7">
              <p className="text-[14px] text-muted">Quer navegar pelo site? Ele abre numa nova aba.</p>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-flare px-5 text-[15px] font-bold text-[#1d1400] transition-transform hover:-translate-y-px"
              >
                Abrir o site
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <aside className="border-t border-line p-5 md:p-7 lg:border-l lg:border-t-0">
          <h3 className="eyebrow">O projeto</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>

          <h3 className="eyebrow mt-8">Resultado</h3>
          <dl className="mt-4 space-y-4">
            {project.results.map((result) => (
              <div key={result.label} className="border-t border-line pt-3">
                <dt className="font-mono text-[12px] tracking-[0.04em] text-volt">{result.value}</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-faint">{result.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Modal>
  );
}
