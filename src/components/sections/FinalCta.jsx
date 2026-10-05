import { Icon } from '../ui/Icon';
import { contact } from '../../data/site';
import { vtxTap } from '../../data/vtxtap';

/** Chamada final, igual à da landing (.final): bloco noite centrado com anel. */
export function FinalCta() {
  return (
    <section className="final" id="contato" aria-labelledby="finalTitulo" data-reveal>
      <img className="polvo" src="/marca/polvo-roxo.svg" alt="" width="92" height="86" />
      <p className="kicker" style={{ color: 'var(--lilas)' }}>
        Vamos conversar
      </p>
      <h2 id="finalTitulo">
        Conta o processo. <em>A gente devolve o mapa.</em>
      </h2>
      <p>
        Restaurante? Mostramos o VTX Tap funcionando e montamos o orçamento para o seu número de mesas. Outra operação?
        O primeiro encontro é um diagnóstico de onde o cliente entra, quem responde e o que ainda é feito à mão.
      </p>
      <div className="ctas" style={{ justifyContent: 'center' }}>
        <a className="btn btn-ouro" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
          <Icon name="msg" />
          Falar no WhatsApp
        </a>
        <a className="btn btn-linha" href={vtxTap.orcamento} target="_blank" rel="noopener noreferrer">
          Orçar o VTX Tap
          <Icon name="arrow" />
        </a>
      </div>
      <p className="final-contatos">
        <a href={contact.emailHref}>{contact.email}</a>
        <a className="num" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
          {contact.whatsapp}
        </a>
        <span>{contact.location}</span>
      </p>
    </section>
  );
}
