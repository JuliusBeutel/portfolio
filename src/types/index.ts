export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlight?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Mobile' | 'Embedded' | 'Tools';
  iconUrl: string;
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description?: string;
}
