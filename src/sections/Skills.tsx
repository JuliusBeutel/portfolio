import { useState } from 'react';
import Section from '../components/ui/Section';
import SkillIcon from '../components/features/SkillIcon';
import { skills } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);

  const doubled = [...skills, ...skills];

  return (
    <Section id="skills" title={t.sections.skills}>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4"
          style={{
            animation: 'skills-scroll 45s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {doubled.map((skill, i) => (
            <SkillIcon key={`${skill.id}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
