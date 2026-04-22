import { motion } from 'framer-motion';
import Card from '../ui/Card';
import type { Skill } from '../../types';

interface SkillIconProps {
  skill: Skill;
}

export default function SkillIcon({ skill }: SkillIconProps) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.15 }}>
      <Card hover className="flex flex-col items-center justify-center gap-3 p-4 text-center">
        <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10" loading="lazy" />
        <span className="text-text-secondary text-xs font-medium">{skill.name}</span>
      </Card>
    </motion.div>
  );
}
