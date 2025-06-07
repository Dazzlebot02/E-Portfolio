export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  course?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Course {
  id: number;
  name: string;
  code: string;
  description: string;
  reflection: string;
  projects: CourseProject[];
}

export interface CourseProject {
  name: string;
  description: string;
  url: string;
}