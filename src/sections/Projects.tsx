import { useState } from 'react';
import Section from '../components/ui/Section';
import ProjectCard from '../components/features/ProjectCard';
import ProjectModal from '../components/features/ProjectModal';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../types';

export default function Projects() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <Section id="projects" title={t.sections.projects}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelected}
            />
          ))}
        </div>
      </Section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
