import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { education } from '../data/education';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {education.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <span className="font-semibold text-text-primary text-lg">
                  {entry.degree} · {entry.field}
                </span>
                <span className="text-text-muted text-sm shrink-0">{entry.period}</span>
              </div>
              <div className="text-accent text-sm font-medium mb-3">{entry.institution}</div>
              {entry.description && (
                <p className="text-text-secondary text-sm leading-relaxed">{entry.description}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
