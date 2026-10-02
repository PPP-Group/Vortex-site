import { useRef } from 'react';
import { Button, ArrowRight, WhatsAppIcon } from '../ui/Button';
import { contact } from '../../data/site';
import { useParallax } from '../../hooks/useMotionPrimitives';
import { useReducedMotion } from '../../hooks/useMediaQuery';

/**
 * CTA final.
 *
 * Bloco noite com os anéis concêntricos da marca, e o único botão ouro do site:
 * ele foi guardado por nove seções para que aqui signifique "é aqui que se decide".
 */
export function FinalCta() {
  const glowRef = useRef(null);
  const reduced = useReducedMotion();

  useParallax(glowRef, { amplitude: 36, disabled: reduced });

  return (
    <section
      id="contato"
      data-spine-node="contato"
      data-spine-label="contato"
      aria-label="Fale com a Vortex"
      className="relative overflow-hidden border-t border-line bg-ink-100 py-28 md:py-40"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="parallax aneis -right-[260px] -top-[260px] [--aneis:760px] md:-right-[180px]"
      />
      <div aria-hidden="true" className="canvas-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="shell relative">
        <div className="max-w-4xl">
          <p className="eyebrow" data-reveal>
            Próximo passo
          </p>
          <h2 className="display display-xl mt-6 text-paper" data-reveal>
            Conta o processo.
            <br />
            <em>A gente devolve o mapa.</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl" data-reveal>
            O primeiro encontro é um diagnóstico: onde o lead entra, quem responde, o que ainda é
            feito à mão. Você sai com o desenho da automação — mesmo que decida construir sozinho.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-3" data-reveal>
            <Button
              as="a"
              href={contact.emailHref || '#contato'}
              variant="flare"
              size="lg"
              data-cursor
            >
              Agendar diagnóstico
              <ArrowRight />
            </Button>
            <Button as="a" href="#portfolio" variant="ghost" size="lg" data-cursor>
              Ver portfólio
            </Button>
          </div>

          <dl className="mt-16 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-3" data-reveal>
            <div>
              <dt className="eyebrow">E-mail</dt>
              <dd className="mt-2">
                <a
                  href={contact.emailHref}
                  className="text-[15px] text-paper transition-colors hover:text-volt"
                  data-cursor
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2">
                <Button
                  as="a"
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="icon"
                  aria-label={`WhatsApp — ${contact.whatsapp}`}
                  data-cursor
                >
                  <WhatsAppIcon />
                </Button>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Atendimento</dt>
              <dd className="mt-2 text-[15px] text-paper">{contact.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
