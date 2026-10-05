import { contact, brand } from '../../data/site';
import { vtxTap } from '../../data/vtxtap';

/** Rodapé igual ao da landing (.rodape): marca, produtos e links. */
export function Footer() {
  const social = contact.socials.find((s) => s.href);
  return (
    <footer className="rodape">
      <span className="rodape-marca">
        <img className="assin" src="/marca/assinatura-cor.svg" alt="Vortex" width="156" height="26" />
        <a className="rodape-produtos" href={vtxTap.site} target="_blank" rel="noopener noreferrer" aria-label="VTX Tap: abrir o site do produto">
          <img className="vtx" src="/marca/vtx-tap-cor.svg" alt="" width="59" height="30" />
        </a>
      </span>
      <nav aria-label="Rodapé">
        <a href={contact.emailHref}>{contact.email}</a>
        {social && (
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.handle}
          </a>
        )}
        <span>
          © {new Date().getFullYear()} {brand.fullName}
        </span>
      </nav>
    </footer>
  );
}
