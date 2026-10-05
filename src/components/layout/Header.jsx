import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Button, ArrowRight } from '../ui/Button';
import { navigation } from '../../data/site';
import { setScrollLocked } from '../../lib/scroll';

/**
 * Cabeçalho: assinatura horizontal (cabeça + VORTEX, versão cor) numa pílula
 * branca que ganha fundo e hairline ao rolar. O VTX Tap leva o selo "Novo".
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setScrollLocked(menuOpen);
    return () => setScrollLocked(false);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-tinta focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--header-h)] items-center justify-center">
        <div className="nav-pill flex items-center justify-between gap-4" data-scrolled={scrolled || menuOpen ? 'true' : 'false'}>
          <a href="#topo" className="flex items-center rounded-full py-2 pl-2" aria-label="Vortex — início">
            <Logo className="h-[26px] w-auto md:h-7" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[15px] font-semibold text-tinta-2 transition-colors hover:bg-surface-2 hover:text-tinta"
              >
                {item.label}
                {item.href === '#vtx-tap' && (
                  <span className="rounded-full bg-ouro px-2 py-px text-[11px] font-bold uppercase tracking-[0.06em] text-on-ouro">
                    Novo
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Button as="a" href="#contato" size="sm">
                Falar com a equipe
                <ArrowRight />
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-surface-2 text-tinta lg:hidden"
            >
              <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        className="mobile-menu fixed inset-0 z-40 bg-nevoa pt-[var(--header-h)] lg:hidden"
        data-open={menuOpen ? 'true' : 'false'}
        inert={menuOpen ? undefined : ''}
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-6">
          <nav aria-label="Navegação principal" className="flex flex-col">
            {navigation.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-item display flex items-center justify-between border-b border-fio py-5 text-4xl text-tinta"
                style={{ '--item-delay': `${60 + i * 55}ms` }}
              >
                {item.label}
                {item.href === '#vtx-tap' && <span className="selo selo--ouro font-body">Novo</span>}
              </a>
            ))}
          </nav>
          <Button as="a" href="#contato" onClick={() => setMenuOpen(false)}>
            Falar com a equipe
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
