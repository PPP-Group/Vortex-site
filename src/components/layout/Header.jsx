import { useEffect, useState } from 'react';
import { navigation, contact } from '../../data/site';
import { setScrollLocked } from '../../lib/scroll';
import { Icon } from '../ui/Icon';

/**
 * Barra do topo, igual à da landing do VTX Tap (.topo): fundo névoa
 * translúcido, hairline ao rolar, links em pílula e o botão roxo. Aqui a
 * marca é a assinatura da Vortex e o VTX Tap leva o selo "Novo".
 *
 * No celular, o hambúrguer abre um painel fixo (.menu-movel) abaixo da
 * barra, com a página travada por trás: nada rola nem treme enquanto ele
 * está aberto. Fecha no X, no Esc, ao tocar num link ou ao passar para o
 * layout de desktop.
 */
export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!aberto) return undefined;
    setScrollLocked(true);
    document.body.classList.add('menu-aberto');
    const onKey = (e) => e.key === 'Escape' && setAberto(false);
    const desktop = window.matchMedia('(min-width: 861px)');
    const onDesktop = () => desktop.matches && setAberto(false);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);
    return () => {
      setScrollLocked(false);
      document.body.classList.remove('menu-aberto');
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [aberto]);

  // Destrava a rolagem antes de a âncora rolar até a seção, no mesmo toque.
  const fechar = () => {
    setScrollLocked(false);
    setAberto(false);
  };

  return (
    <>
      <header className={`topo ${rolou || aberto ? 'rolou' : ''} ${aberto ? 'menu-aberto' : ''}`}>
        <div className="topo-in">
          <a href="#topo" aria-label="Vortex, início" onClick={fechar}>
            <img src="/marca/assinatura-cor.svg" alt="Vortex" width="168" height="28" />
          </a>
          <nav aria-label="Seções">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
                {item.novo && <span className="novo">Novo</span>}
              </a>
            ))}
          </nav>
          <a className="btn btn-roxo" href="#contato">
            Falar com a equipe
          </a>
          <button
            type="button"
            className="topo-menu"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setAberto((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {aberto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </header>

      <div
        id="menu-movel"
        className="menu-movel"
        data-aberto={aberto ? 'true' : 'false'}
        inert={aberto ? undefined : ''}
        aria-hidden={!aberto}
      >
        <nav aria-label="Seções" className="menu-movel-links">
          {navigation.map((item, i) => (
            <a key={item.href} href={item.href} onClick={fechar} style={{ '--i': i }}>
              <span>
                {item.label}
                {item.novo && <span className="novo">Novo</span>}
              </span>
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <div className="menu-movel-acoes">
          <a className="btn btn-roxo" href="#contato" onClick={fechar}>
            Falar com a equipe
          </a>
          <a className="btn btn-ouro" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={fechar}>
            <Icon name="msg" />
            Chamar no WhatsApp
          </a>
          <p className="menu-movel-contato">
            <span className="num">{contact.whatsapp}</span>
            <a href={contact.emailHref}>{contact.email}</a>
          </p>
        </div>
      </div>
    </>
  );
}
