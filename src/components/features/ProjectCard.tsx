import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Card hover className="h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-semibold text-text-primary text-lg leading-tight">{project.title}</h3>
          {project.highlight && (
            <span className="text-accent text-xs font-mono shrink-0 mt-0.5">{project.highlight}</span>
          )}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-bg-elevated text-text-secondary text-xs px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-3">
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="ghost" className="text-xs px-3 py-1.5">
                GitHub
              </Button>
            )}
            {project.demoUrl && (
              <Button href={project.demoUrl} variant="ghost" className="text-xs px-3 py-1.5">
                Demo
              </Button>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}
