import { contact, brand, navigation } from '../../data/site';

/**
 * Rodapé: a assinatura horizontal da Vortex (manual: cabeçalho e rodapé do
 * site) e o nome completo, Vortex Systems, na linha legal.
 */
export function Footer() {
  const social = contact.socials.find((s) => s.href);
  return (
    <footer className="rodape rodape--vortex">
      <div className="rodape-topo">
        <span className="rodape-marca">
          <img className="assin" src="/marca/assinatura-cor.svg" alt="Vortex" width="168" height="28" />
        </span>
        <nav aria-label="Rodapé">
          {navigation.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div className="rodape-base">
        <span>
          © {new Date().getFullYear()} {brand.fullName} · {brand.domain}
        </span>
        <span className="rodape-contato">
          <a href={contact.emailHref}>{contact.email}</a>
          {social && (
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.handle}
            </a>
          )}
        </span>
      </div>
    </footer>
  );
}
