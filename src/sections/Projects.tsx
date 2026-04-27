import Section from '../components/ui/Section';
import ProjectCard from '../components/features/ProjectCard';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="projects" title={t.sections.projects}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
