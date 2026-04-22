import Section from '../components/ui/Section';
import ExperienceItem from '../components/features/ExperienceItem';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((entry, i) => (
          <ExperienceItem key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </Section>
  );
}
