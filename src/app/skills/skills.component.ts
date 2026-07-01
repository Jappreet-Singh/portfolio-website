import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
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
  template: `
    <section class="section-container skills-section" id="skills">
      <div class="section-header fade-in-up">
        <h2>Technical Arsenal</h2>
        <p>Tools and technologies I use to build scalable solutions.</p>
      </div>

      <div class="skills-grid">
        <div *ngFor="let category of skillCategories; let i = index" 
             class="skill-category glass-card spotlight-glow fade-in-up" 
             [style.animation-delay]="(i * 0.1) + 's'"
             appTilt 
             [tiltMaxAngle]="5" 
             [tiltScale]="1.01">
          <div class="category-header">
            <i [class]="category.icon"></i>
            <h3>{{ category.title }}</h3>
          </div>
          <div class="skills-list">
            <span *ngFor="let skill of category.skills" class="skill-pill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('fadeElement') fadeElements!: QueryList<ElementRef>;

  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['Python', 'Java', 'C#', 'TypeScript', 'SQL']
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: ['FastAPI', 'Spring Boot', '.NET']
    },
    {
      title: 'Frontend',
      icon: 'fas fa-desktop',
      skills: ['Angular', 'HTML/CSS']
    },
    {
      title: 'AI & Data',
      icon: 'fas fa-brain',
      skills: ['RAG Architecture', 'Vector Embeddings', 'Prompt Engineering']
    },
    {
      title: 'Tools & Cloud',
      icon: 'fas fa-tools',
      skills: ['MySQL', 'Git', 'Jira', 'Azure (Certified)']
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .skill-card').forEach(el => {
      observer.observe(el);
    });
  }
}
