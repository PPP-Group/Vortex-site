/**
 * Casca de seção: conteúdo até 1120px e 72px entre seções (gap-secoes),
 * um pouco mais no desktop.
 */
export function Section({ id, label, className = '', children, ...rest }) {
  return (
    <section id={id} aria-label={label} className={`relative py-[72px] md:py-24 ${className}`} {...rest}>
      {children}
    </section>
  );
}

/**
 * Cabeçalho de seção do manual: kicker em roxo-ink, título display-secao em
 * caixa alta (uma palavra em <em>) e o parágrafo de abertura até 64ch.
 */
export function SectionHeading({ kicker, title, lead, align = 'left', className = '', children }) {
  return (
    <header className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {kicker && (
        <p className="kicker" data-reveal>
          {kicker}
        </p>
      )}
      <h2 className="display display-secao mt-3" data-reveal>
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-[18px] max-w-[64ch] text-[17px] leading-[1.55] lead-apoio ${align === 'center' ? 'mx-auto' : ''}`}
          data-reveal
        >
          {lead}
        </p>
      )}
      {children}
    </header>
  );
}
