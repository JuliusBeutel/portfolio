import Section from '../components/ui/Section';
import SkillIcon from '../components/features/SkillIcon';
import { skills } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import type { Skill } from '../types';

const CATEGORIES: Skill['category'][] = ['Frontend', 'Mobile', 'Embedded', 'Tools'];

export default function Skills() {
  const { t } = useLanguage();

  const grouped = CATEGORIES.reduce<Record<string, typeof skills>>((acc, cat) => {
    const items = skills.filter((s) => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <Section id="skills" title={t.sections.skills}>
      <div className="flex flex-col gap-10">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
              {t.skills.categories[category] ?? category}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {items.map((skill) => (
                <SkillIcon key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
