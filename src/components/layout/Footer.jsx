import { Logo } from './Logo';
import { brand, contact, navigation } from '../../data/site';

/**
 * Rodapé: o nome completo (VORTEX SYSTEMS, negativo) sobre preto, como pede o
 * manual para rodapé legal e contato.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-3 bg-preto text-noite-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo variant="systems" esquema="negativo" className="h-9 w-auto" />
          <p className="mt-5 max-w-sm text-[14.5px] leading-[1.55] text-noite-2">{brand.short}</p>
        </div>

        <nav aria-label="Navegação do rodapé" className="md:col-span-3">
          <h2 className="kicker !text-lilas">Seções</h2>
          <ul className="mt-4 grid gap-1">
            {[...navigation, { label: 'Contato', href: '#contato' }].map((item) => (
              <li key={item.href + item.label}>
                <a href={item.href} className="inline-block py-1 text-[15px] text-noite-2 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="kicker !text-lilas">Contato</h2>
          <ul className="mt-4 grid gap-1">
            <li>
              <a href={contact.emailHref} className="inline-block py-1 text-[15px] text-noite-2 hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="num inline-block py-1 text-[15px] text-noite-2 hover:text-white"
              >
                {contact.whatsapp}
              </a>
            </li>
            {contact.socials
              .filter((s) => s.href)
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1 text-[15px] text-noite-2 hover:text-white">
                    {s.label} {s.handle}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 text-[13.5px] text-noite-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {brand.fullName} · {brand.domain}
        </p>
        <a href="#topo" className="w-fit hover:text-white">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
