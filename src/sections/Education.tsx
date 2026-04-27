import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { education } from '../data/education';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <Section id="education" title={t.sections.education}>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {education.map((entry, i) => {
          const field = entry.field[lang];
          const description = entry.description?.[lang];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card key={lang}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <span className="font-semibold text-text-primary text-lg">
                    {entry.degree} · {field}
                  </span>
                  <span className="text-text-muted text-sm shrink-0">{entry.period}</span>
                </div>
                <div className="text-accent text-sm font-medium mb-3">{entry.institution}</div>
                {description && (
                  <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
