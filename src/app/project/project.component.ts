import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { TiltDirective } from '../shared/tilt.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  template: `
    <section class="projects-page section-container">
      <div class="page-header fade-in-up">
        <h1 class="page-title">Projects</h1>
        <p class="page-subtitle">A collection of my recent work and side projects.</p>
      </div>

      <!-- Featured Projects -->
      <div class="projects-section">
        <h2 class="section-title fade-in-up">Featured Projects</h2>
        <div class="projects-grid featured-grid">
          <div *ngFor="let project of featuredProjects; let i = index" 
               class="project-card featured-card glass-card spotlight-glow fade-in-up"
               [style.animation-delay]="(i * 0.1) + 's'"
               appTilt [tiltMaxAngle]="4" [tiltScale]="1.01">
            <div class="card-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              
              <ul class="project-highlights">
                <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
              </ul>
              
              <div class="tech-stack">
                <span *ngFor="let tech of project.technologies" class="tech-pill">{{ tech }}</span>
              </div>
              
              <div class="card-actions">
                <a *ngIf="project.githubLink" [href]="project.githubLink" target="_blank" rel="noopener noreferrer" class="btn btn-outline action-btn">
                  <i class="fab fa-github"></i> Source
                </a>
                <a *ngIf="project.demoLink" [href]="project.demoLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary action-btn">
                  <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div class="projects-section other-projects">
        <h2 class="section-title fade-in-up">Coursework & Other Projects</h2>
        <div class="projects-grid compact-grid">
          <div *ngFor="let project of otherProjects; let i = index" 
               class="project-card compact-card glass-card spotlight-glow fade-in-up"
               [style.animation-delay]="(i * 0.1) + 's'"
               appTilt [tiltMaxAngle]="5" [tiltScale]="1.02">
            <div class="card-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="tech-stack">
                <span *ngFor="let tech of project.technologies" class="tech-pill">{{ tech }}</span>
              </div>
              
              <div class="card-actions">
                <a *ngIf="project.githubLink" [href]="project.githubLink" target="_blank" rel="noopener noreferrer" class="btn btn-outline action-btn btn-sm">
                  <i class="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  featuredProjects: Project[] = [];
  otherProjects: Project[] = [];

  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'AI Chatbot with RAG',
        subtitle: 'Full-stack RAG system providing context-grounded LLM responses.',
        description: 'Built a document ingestion pipeline with chunking, embeddings, and semantic vector search. Reduced hallucinations via cosine-similarity retrieval.',
        highlights: [
          'Reduced hallucination via cosine-similarity retrieval.',
          'Built a document ingestion pipeline (chunking, embeddings, semantic vector search).',
          'FastAPI backend with structured prompt construction.'
        ],
        technologies: ['Angular', 'FastAPI', 'Python', 'Vector Embeddings', 'Prompt Engineering'],
        category: 'featured',
        githubLink: '#', // TODO: Update with real GitHub URL
      },
      {
        id: 2,
        title: 'League Tracker',
        subtitle: 'Full-stack sports management platform with real-time rankings.',
        description: 'Sports management platform with REST and SOAP services, and optimized SQL.',
        highlights: [
          'Developed REST and SOAP services for data integration.',
          'Optimized SQL queries for real-time ranking generation.'
        ],
        technologies: ['Java', 'MySQL', 'REST', 'SOAP'],
        category: 'featured',
        githubLink: '#', // TODO: Update with real GitHub URL
      },
      {
        id: 3,
        title: 'Employee Management System',
        subtitle: 'Authentication-secured CRUD application.',
        description: 'Session management and SQL-injection mitigation.',
        highlights: [
          'Implemented robust session management.',
          'Secured endpoints against SQL-injection attacks.'
        ],
        technologies: ['C#', 'PHP', 'SQL'],
        category: 'featured',
        githubLink: '#', // TODO: Update with real GitHub URL
      },
      {
        id: 4,
        title: 'Angular Demos',
        subtitle: 'Projects showcasing Angular capabilities.',
        description: 'Projects that showcase the use of Angular framework for building dynamic web applications.',
        highlights: [],
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        category: 'other',
        githubLink: '#', // TODO: Update with real GitHub URL
      },
      {
        id: 5,
        title: 'Book Management System',
        subtitle: 'Developed using C# and MS Access.',
        description: 'Projects that showcase apps made with help of visual studio and C# programming language.',
        highlights: [],
        technologies: ['C#', 'MS Access', 'SQL'],
        category: 'other',
        githubLink: '#', // TODO: Update with real GitHub URL
      },
      {
        id: 6,
        title: 'Java Intro App',
        subtitle: 'Demonstrates basic programming concepts.',
        description: 'Projects that showcase the use of Java for building robust applications with help of Spring Boot.',
        highlights: [],
        technologies: ['Java', 'Spring Boot'],
        category: 'other',
        githubLink: '#', // TODO: Update with real GitHub URL
      }
    ];

    this.featuredProjects = this.projects.filter(p => p.category === 'featured');
    this.otherProjects = this.projects.filter(p => p.category === 'other');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .project-card').forEach(el => {
      observer.observe(el);
    });
  }
}
