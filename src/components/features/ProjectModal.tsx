import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ImageIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import type { Project } from '../../types';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              className="relative bg-bg-surface border border-border rounded-2xl w-full max-w-3xl max-h-[88vh] overflow-y-auto pointer-events-auto"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors z-10 p-1 rounded-lg hover:bg-bg-elevated"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6 pr-8">{project.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                  {/* LEFT — description in active language */}
                  <div className="flex flex-col">
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {project.description[lang]}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="bg-bg-elevated text-text-secondary text-xs px-2.5 py-0.5 rounded-full border border-border"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* GitHub — pushed to bottom of column */}
                    {project.githubUrl && (
                      <div className="mt-auto pt-5">
                        <Button href={project.githubUrl} variant="ghost" icon={<GithubIcon />}>
                          {t.projects.githubLabel}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* RIGHT — screenshot placeholders */}
                  <div className="flex flex-col gap-3">
                    {[0, 1].map((i) => (
                      <div
                        key={i}
                        className="aspect-video bg-bg-elevated border border-border rounded-xl flex items-center justify-center overflow-hidden"
                      >
                        {project.detailImages?.[i] ? (
                          <img
                            src={project.detailImages[i]}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-text-muted">
                            <ImageIcon size={22} strokeWidth={1.5} />
                            <span className="text-[11px] font-mono">{t.projects.screenshot} {i + 1}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
