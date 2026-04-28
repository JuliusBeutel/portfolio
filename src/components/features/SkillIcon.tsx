import type { Skill } from '../../types';

interface SkillIconProps {
  skill: Skill;
}

export default function SkillIcon({ skill }: SkillIconProps) {
  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2.5 p-4 bg-bg-surface border border-border rounded-xl w-24 shrink-0 hover:border-accent/40 hover:bg-bg-elevated transition-colors duration-200 group"
    >
      {skill.iconUrl ? (
        <img
          src={skill.iconUrl}
          alt={skill.name}
          className="w-9 h-9 group-hover:scale-110 transition-transform duration-200"
          loading="lazy"
        />
      ) : (
        <div className="w-9 h-9 flex items-center justify-center text-accent font-mono text-sm font-bold">
          {skill.name.slice(0, 3)}
        </div>
      )}
      <span className="text-text-secondary text-xs font-medium text-center leading-tight">
        {skill.name}
      </span>
    </a>
  );
}
