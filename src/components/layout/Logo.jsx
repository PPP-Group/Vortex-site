/**
 * Marcas da Vortex. Os SVGs vêm do manual (public/marca, gerados pelo
 * fonte/gerador do manual); nunca redigite o nome numa fonte.
 *
 *   variant="assinatura"  cabeça + VORTEX, a assinatura principal (cabeçalho)
 *   variant="systems"     VORTEX SYSTEMS, o nome completo (rodapé legal)
 *   esquema               "cor" sobre claro, "negativo" sobre noite e preto
 */
const ARQUIVOS = {
  assinatura: { cor: '/marca/assinatura-cor.svg', negativo: '/marca/assinatura-negativo.svg' },
  systems: { cor: '/marca/vortex-systems-cor.svg', negativo: '/marca/vortex-systems-negativo.svg' },
};

export function Logo({ variant = 'assinatura', esquema = 'cor', className = 'h-7 w-auto' }) {
  return <img src={ARQUIVOS[variant][esquema]} alt="Vortex" className={`block shrink-0 ${className}`} />;
}

/** Logo do VTX Tap: cor sobre claro, negativo sobre noite, branco sobre roxo. */
export function VtxTapLogo({ esquema = 'cor', className = 'h-12 w-auto' }) {
  return <img src={`/marca/vtx-tap-${esquema}.svg`} alt="VTX Tap" className={`block shrink-0 ${className}`} />;
}
