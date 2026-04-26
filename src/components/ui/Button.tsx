interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({ children, href, onClick, variant = 'primary', className = '', icon }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm transition-colors cursor-pointer';
  const styles = {
    primary: 'bg-accent text-white hover:bg-accent-dim',
    ghost: 'border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary',
  };

  const inner = (
    <>
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    const isExternal = !href.startsWith('#') && !href.startsWith('/');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {inner}
    </button>
  );
}
