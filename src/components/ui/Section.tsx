interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 relative ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-text-primary">{title}</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>
        {children}
      </div>
    </section>
  );
}
