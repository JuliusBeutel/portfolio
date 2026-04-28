import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { t, lang } = useLanguage();

  return (
    <motion.div
      className="cursor-pointer h-full group"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(project)}
    >
      <div className="h-full bg-bg-surface border border-border rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 group-hover:border-accent/40">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-bg-elevated border-b border-border flex items-center justify-center overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-text-muted">
              <ImageIcon size={28} strokeWidth={1.5} />
            </div>
          )}
          {project.highlight && (
            <span className="absolute top-3 right-3 bg-bg/80 backdrop-blur-sm text-accent text-[11px] font-mono px-2 py-0.5 rounded-full border border-border">
              {project.highlight}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-semibold text-text-primary text-base mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
            {project.shortDescription[lang]}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.keywords.map((kw) => (
              <span
                key={kw}
                className="bg-bg-elevated text-text-secondary text-[11px] px-2 py-0.5 rounded-full border border-border"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-end gap-1.5 text-accent text-xs font-medium">
            <span>{t.projects.clickForDetails}</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
