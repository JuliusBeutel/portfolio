export interface DatePoint {
  month: number;
  year: number;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  startDate: DatePoint;
  endDate: DatePoint;
  description: string[];
  technologies: string[];
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
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
  field: string;
  institution: string;
  period: string;
  description?: string;
}
