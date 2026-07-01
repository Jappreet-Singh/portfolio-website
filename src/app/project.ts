export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: 'featured' | 'other';
  image?: string;
  githubLink?: string;
  demoLink?: string;
}
