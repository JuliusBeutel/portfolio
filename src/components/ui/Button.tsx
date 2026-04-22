interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm transition-colors cursor-pointer';
  const styles = {
    primary: 'bg-accent text-white hover:bg-accent-dim',
    ghost: 'border border-border text-text-secondary hover:border-accent/50 hover:text-text-primary',
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
