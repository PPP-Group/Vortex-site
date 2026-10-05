import { Icon } from '../ui/Icon';
import { contact } from '../../data/site';

/**
 * Chamada final: bloco noite com os anéis, o texto à esquerda e o polvo à
 * direita. Embaixo, na largura toda do bloco, os três contatos numa linha.
 */
export function FinalCta() {
  return (
    <section className="contato-bloco" id="contato" aria-labelledby="finalTitulo" data-reveal>
      <div className="contato-txt">
        <p className="kicker">Próximo passo</p>
        <h2 id="finalTitulo">
          Conta o processo. <em>A gente devolve o mapa.</em>
        </h2>
        <p className="contato-sub">
          O primeiro encontro é um diagnóstico: onde o lead entra, quem responde, o que ainda é feito à mão. Para
          restaurante, mostramos o VTX Tap funcionando e montamos o orçamento pelo número de mesas.
        </p>
        <div className="ctas">
          <a className="btn btn-ouro" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            <Icon name="msg" />
            Chamar no WhatsApp
          </a>
          <a className="btn btn-linha" href={contact.emailHref}>
            Mandar um e-mail
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <img className="contato-polvo" src="/marca/polvo-roxo.svg" alt="" aria-hidden="true" width="300" height="279" />
      <dl className="contatos">
        <Contato icon="msg" label="E-mail" valor={contact.email} href={contact.emailHref} />
        <Contato icon="phone" label="WhatsApp" valor={contact.whatsapp} href={contact.whatsappHref} externo numero />
        <Contato icon="map" label="Atendimento" valor={contact.location} />
      </dl>
    </section>
  );
}

function Contato({ icon, label, valor, href, externo, numero }) {
  const texto = <span className={numero ? 'num' : ''}>{valor}</span>;
  return (
    <div>
      <span className="ico">
        <Icon name={icon} />
      </span>
      <div>
        <dt>{label}</dt>
        <dd>
          {href ? (
            <a href={href} {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {texto}
            </a>
          ) : (
            texto
          )}
        </dd>
      </div>
    </div>
  );
}
