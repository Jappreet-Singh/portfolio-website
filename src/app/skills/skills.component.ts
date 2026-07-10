import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltDirective } from '../shared/tilt.directive';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('fadeElement') fadeElements!: QueryList<ElementRef>;

  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['Python', 'Java', 'C#', 'TypeScript', 'SQL'],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: ['FastAPI', 'Spring Boot', '.NET'],
    },
    {
      title: 'Frontend',
      icon: 'fas fa-desktop',
      skills: ['Angular', 'HTML/CSS', 'Bootstrap'],
    },
    {
      title: 'AI & Data',
      icon: 'fas fa-brain',
      skills: ['RAG Architecture', 'Vector Embeddings', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Cloud',
      icon: 'fas fa-tools',
      skills: ['MySQL', 'Git', 'Jira', 'Azure (Certified)'],
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.fade-in-up, .skill-category').forEach((el) => {
      observer.observe(el);
    });
  }
}
