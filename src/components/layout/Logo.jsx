/**
 * Marca da Vortex. Ícone: PNG recortado (logo21.png), tentáculos de kraken.
 */
export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/logo21.png" alt="" className="h-7 w-auto shrink-0" aria-hidden="true" />
      <span
        className="display text-[1.35rem] leading-none tracking-[-0.02em]"
        style={{ fontStretch: '118%' }}
      >
        Vortex
      </span>
    </span>
  );
}
