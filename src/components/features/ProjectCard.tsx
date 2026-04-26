import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import Card from '../ui/Card';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Card hover className="h-full flex flex-col p-0 overflow-hidden">

        {/* App screenshot */}
        <div className="relative aspect-video bg-bg-elevated border-b border-border flex items-center justify-center">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-text-muted">
              <ImageIcon size={28} strokeWidth={1.5} />
              <span className="text-xs font-mono">screenshot</span>
            </div>
          )}
          {project.highlight && (
            <span className="absolute top-3 right-3 bg-bg/80 backdrop-blur-sm text-accent text-xs font-mono px-2 py-0.5 rounded-full border border-border">
              {project.highlight}
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-semibold text-text-primary text-lg leading-tight mb-2">
            {project.title}
          </h3>
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

          {/* GitHub button bottom-right */}
          {project.githubUrl && (
            <div className="flex justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary text-xs transition-colors"
              >
                <GithubIcon />
                View on GitHub
              </a>
            </div>
          )}
        </div>

      </Card>
    </motion.div>
  );
}
