/**
 * Celular da landing do VTX Tap (classe .fone de marca.css): iPhone com
 * Dynamic Island e barra de status, com uma tela real do produto.
 */

function StatusIcons() {
  return (
    <svg viewBox="0 0 78 14" aria-hidden="true">
      <g fill="currentColor">
        <rect x="0" y="9" width="3" height="4" rx="1" />
        <rect x="5" y="6.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="4" width="3" height="9" rx="1" />
        <rect x="15" y="1.5" width="3" height="11.5" rx="1" />
        <path d="M33 3.2a11.5 11.5 0 0 1 8.2 3.4l1.3-1.3A13.4 13.4 0 0 0 33 1.4a13.4 13.4 0 0 0-9.5 3.9l1.3 1.3A11.5 11.5 0 0 1 33 3.2zm0 3.7a7.8 7.8 0 0 1 5.6 2.3l1.3-1.3A9.6 9.6 0 0 0 33 5a9.6 9.6 0 0 0-6.9 2.9l1.3 1.3A7.8 7.8 0 0 1 33 6.9zm0 3.7a4 4 0 0 0-2.9 1.2L33 14.7l2.9-2.9A4 4 0 0 0 33 10.6z" />
        <rect x="50" y="1.5" width="24" height="11" rx="3.2" fill="none" stroke="currentColor" strokeOpacity=".45" />
        <rect x="52" y="3.5" width="18" height="7" rx="1.8" />
        <rect x="75.5" y="5" width="1.8" height="4" rx=".9" fillOpacity=".45" />
      </g>
    </svg>
  );
}

function TelaFone({ src, alt, eager }) {
  return (
    <span className="fone-tela">
      <span className="fone-status" aria-hidden="true">
        <span>9:41</span>
        <StatusIcons />
      </span>
      <img src={src} width="600" height="1299" alt={alt} loading={eager ? 'eager' : 'lazy'} />
    </span>
  );
}

/** Celular. Sem `zoom`, é só a imagem (usado no hero, que é decorativo). */
export function Fone({ src, alt = '', label, zoom = true, eager = false, className = '' }) {
  if (!zoom) {
    return (
      <span className={`fone ${className}`}>
        <TelaFone src={src} alt={alt} eager={eager} />
      </span>
    );
  }
  return (
    <button type="button" className={`zoom fone ${className}`} data-zoom={src} aria-label={`Ampliar: ${label}`}>
      <TelaFone src={src} alt={alt} />
    </button>
  );
}
