export type Lang = 'en' | 'de';

export interface DatePoint {
  month: number;
  year: number;
}

export interface ExperienceEntry {
  id: string;
  role: Record<Lang, string>;
  company: string;
  startDate: DatePoint;
  endDate: DatePoint;
  description: Record<Lang, string[]>;
  technologies: string[];
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: Record<Lang, string>;
  technologies: string[];
  highlight?: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Mobile' | 'Embedded' | 'Tools';
  iconUrl: string;
  proficiency?: number;
}

export interface EducationEntry {
  degree: string;
  field: Record<Lang, string>;
  institution: string;
  period: string;
  description?: Record<Lang, string>;
}
