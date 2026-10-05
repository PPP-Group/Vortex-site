import { Button, ArrowRight, WhatsAppIcon } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { contact } from '../../data/site';

/**
 * Chamada final: bloco noite com os anéis e o polvo, e o único botão ouro da
 * página — o segundo botão de conversão, ao lado do roxo.
 */
export function FinalCta() {
  return (
    <section id="contato" aria-label="Fale com a Vortex" className="pb-3 pt-6">
      <div className="mx-auto w-[min(1240px,100%-24px)]">
        <div className="bloco bloco--noite sobre-noite lg:py-16">
          <span aria-hidden="true" className="aneis -right-[140px] -top-[140px] [--aneis:480px]" />

          <div className="mx-auto w-full max-w-[1120px] lg:grid lg:grid-cols-[1fr_300px] lg:items-center lg:gap-12">
            <div>
              <p className="kicker" data-reveal>
                Próximo passo
              </p>
              <h2 className="display display-final mt-3" data-reveal>
                Conta o processo. <em>A gente devolve o mapa.</em>
              </h2>
              <p className="lead mt-6 max-w-[56ch] text-noite-2" data-reveal>
                O primeiro encontro é um diagnóstico: onde o lead entra, quem responde, o que ainda é feito à mão. Para
                restaurante, mostramos o VTX Tap funcionando e montamos o orçamento pelo número de mesas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <Button as="a" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" variant="ouro">
                  <WhatsAppIcon />
                  Chamar no WhatsApp
                </Button>
                <Button as="a" href={contact.emailHref} variant="linha" className="text-white">
                  Mandar um e-mail
                  <ArrowRight />
                </Button>
              </div>

              <dl className="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3" data-reveal>
                <Contato icon="msg" label="E-mail" valor={contact.email} href={contact.emailHref} />
                <Contato icon="phone" label="WhatsApp" valor={contact.whatsapp} href={contact.whatsappHref} externo numero />
                <Contato icon="map" label="Atendimento" valor={contact.location} />
              </dl>
            </div>

            <img
              src="/marca/polvo-roxo.svg"
              alt=""
              aria-hidden="true"
              className="mx-auto mt-10 hidden w-[240px] lg:mt-0 lg:block lg:w-full"
              data-reveal="scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato({ icon, label, valor, href, externo, numero }) {
  const conteudo = <span className={`text-[15px] text-white ${numero ? 'num' : ''}`}>{valor}</span>;
  return (
    <div className="flex gap-3">
      <span className="ico !h-10 !w-10 !rounded-[11px]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <dt className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-lilas">{label}</dt>
        <dd className="mt-0.5 break-words">
          {href ? (
            <a href={href} className="hover:underline" {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {conteudo}
            </a>
          ) : (
            conteudo
          )}
        </dd>
      </div>
    </div>
  );
}
