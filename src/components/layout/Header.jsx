import { useEffect, useState } from 'react';
import { navigation } from '../../data/site';

/**
 * Barra do topo, igual à da landing do VTX Tap (.topo): fundo névoa
 * translúcido, hairline ao rolar, links em pílula e o botão roxo. Aqui a
 * marca é a assinatura da Vortex e o VTX Tap leva o selo "Novo".
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

  return (
    <header className={`topo ${rolou ? 'rolou' : ''}`}>
      <div className="topo-in">
        <a href="#topo" aria-label="Vortex, início">
          <img src="/marca/assinatura-cor.svg" alt="Vortex" width="168" height="28" />
        </a>
        <nav aria-label="Seções" className={aberto ? 'aberto' : ''}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setAberto(false)}>
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
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {aberto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
