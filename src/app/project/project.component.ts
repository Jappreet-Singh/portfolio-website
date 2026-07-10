import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { TiltDirective } from '../shared/tilt.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  featuredProjects: Project[] = [];
  otherProjects: Project[] = [];

  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'AI Chatbot with RAG',
        subtitle:
          'Full-stack RAG system providing context-grounded LLM responses.',
        description:
          'Built a document ingestion pipeline with chunking, embeddings, and semantic vector search. Reduced hallucinations via cosine-similarity retrieval.',
        highlights: [
          'Reduced hallucination via cosine-similarity retrieval.',
          'Built a document ingestion pipeline (chunking, embeddings, semantic vector search).',
          'FastAPI backend with structured prompt construction.',
        ],
        technologies: [
          'Angular',
          'FastAPI',
          'Python',
          'Vector Embeddings',
          'Prompt Engineering',
        ],
        category: 'featured',
        githubLink: 'https://github.com/Jappreet-Singh/copliot_clone',
      },
      {
        id: 2,
        title: 'League Tracker',
        subtitle:
          'Full-stack sports management platform with real-time rankings.',
        description:
          'Sports management platform with REST and SOAP services, and optimized SQL.',
        highlights: [
          'Developed REST and SOAP services for data integration.',
          'Optimized SQL queries for real-time ranking generation.',
        ],
        technologies: ['Java', 'MySQL', 'REST', 'SOAP'],
        category: 'featured',
        githubLink:
          'https://bitbucket.org/jappreetsinghcis/cis2232_20242025_project_singh_jappreet_league_standings_track/src/main/',
      },
      {
        id: 3,
        title: 'Employee Management System',
        subtitle: 'Authentication-secured CRUD application.',
        description: 'Session management and SQL-injection mitigation.',
        highlights: [
          'Implemented robust session management.',
          'Secured endpoints against SQL-injection attacks.',
        ],
        technologies: ['C#', 'PHP', 'SQL'],
        category: 'featured',
        githubLink:
          'https://bitbucket.org/jappreetsinghcis/employeesearch/src/main/',
      },

      {
        id: 4,
        title: 'Book Management System',
        subtitle: 'Developed using C# and MS Access.',
        description:
          'Projects that showcase apps made with help of visual studio and C# programming language.',
        highlights: [
          'created an UI interface that helps user to search for particular book based on name,author or isbn of book.',
          'Created database with MS Access and established connection between frontend and backend.',
        ],
        technologies: ['C#', 'MS Access', 'SQL'],
        category: 'featured',
        githubLink:
          'https://bitbucket.org/jappreetsinghcis/book_management_system/src/main/',
      },
    ];

    this.featuredProjects = this.projects.filter(
      (p) => p.category === 'featured',
    );
    this.otherProjects = this.projects.filter((p) => p.category === 'other');
  }

  ngOnInit(): void {}

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

    document.querySelectorAll('.fade-in-up, .project-card').forEach((el) => {
      observer.observe(el);
    });
  }
}
