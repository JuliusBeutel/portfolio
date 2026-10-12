interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-bg-surface border border-border rounded-2xl p-6 transition-colors duration-300
        ${hover ? 'hover:border-accent/50 hover:bg-bg-elevated' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
