import { contact } from '../../data/site';

/**
 * Botão flutuante de WhatsApp, nas cores da marca: roxo com o glifo branco,
 * e anel lilás. Some enquanto o menu do celular está
 * aberto (classe menu-aberto no body, posta pelo Header).
 */
export function WhatsAppFlutuante() {
  return (
    <a
      className="wpp"
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a Vortex no WhatsApp, ${contact.whatsapp}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.44-1.36a9.9 9.9 0 0 0 4.6 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.23.81.86-3.15-.2-.32a8.16 8.16 0 0 1-1.26-4.4c0-4.53 3.7-8.23 8.24-8.23 4.53 0 8.23 3.7 8.23 8.23 0 4.54-3.7 8.39-8.24 8.39Zm4.5-6.16c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
      </svg>
      <span className="wpp-rotulo">Fale com a gente</span>
    </a>
  );
}
