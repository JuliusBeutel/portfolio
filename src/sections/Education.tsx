import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { education } from '../data/education';
import { useLanguage } from '../context/LanguageContext';
import hdmLogo from '../assets/hdm_logo.svg';

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
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-semibold text-text-primary text-lg">
                      {entry.degree} · {field}
                    </span>
                    <div className="text-text-muted text-sm mt-0.5 mb-1">{entry.period}</div>
                    <div className="text-accent text-sm font-medium mb-3">{entry.institution}</div>
                    {description && (
                      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                    )}
                  </div>
                  <img src={hdmLogo} alt="HdM Stuttgart" className="w-14 shrink-0 mt-0.5" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
