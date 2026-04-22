import { motion } from 'framer-motion';
import Card from '../ui/Card';
import type { ExperienceEntry } from '../../types';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  index: number;
}

export default function ExperienceItem({ entry, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <span className="font-semibold text-text-primary">{entry.role}</span>
          <span className="text-text-muted text-sm shrink-0">{entry.period}</span>
        </div>
        <div className="text-accent text-sm font-medium mb-4">{entry.company}</div>
        <ul className="space-y-1.5 mb-4">
          {entry.description.map((item, i) => (
            <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
              <span className="text-text-muted mt-0.5 shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-bg-elevated text-text-secondary text-xs px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
