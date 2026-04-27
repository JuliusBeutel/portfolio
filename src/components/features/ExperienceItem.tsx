import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';
import type { ExperienceEntry } from '../../types';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  const { t, lang } = useLanguage();
  const role = entry.role[lang];
  const description = entry.description[lang];
  const months = t.experience.monthNames;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
    >
      <Card key={lang} className="w-72 p-5!">
        <div className="flex flex-col gap-0.5 mb-1">
          <span className="font-semibold text-text-primary text-sm leading-snug">{role}</span>
          <span className="text-text-muted text-xs">
            {months[entry.startDate.month - 1]} {entry.startDate.year}
            {' – '}
            {months[entry.endDate.month - 1]} {entry.endDate.year}
          </span>
        </div>
        <div className="text-accent text-xs font-medium mb-3">{entry.company}</div>
        <ul className="space-y-1 mb-3">
          {description.map((item, i) => (
            <li key={i} className="text-text-secondary text-xs leading-relaxed flex gap-2">
              <span className="text-text-muted shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {entry.technologies.map((tech) => (
            <span key={tech} className="bg-bg-elevated text-text-secondary text-[11px] px-2 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
