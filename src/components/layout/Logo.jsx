/**
 * Marca da Vortex: a assinatura horizontal do manual de marca (cabeça + letreiro VORTEX), versão negativa.
 * O SVG vem de public/marca e é gerado pelo manual; nunca redigite o nome numa fonte.
 */
export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src="/marca/assinatura-negativo.svg" alt="Vortex" className="h-7 w-auto shrink-0" width="168" height="28" />
    </span>
  );
}
