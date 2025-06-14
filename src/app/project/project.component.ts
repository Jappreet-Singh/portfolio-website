import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
  <div *ngFor="let project of projects" class="project-card">
    <img [src]="project.image" alt="{{ project.title }}" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a [href]="project.link" target="_blank">View Project</a>
  </div>
</div>

  `,
  styles: [
  ]
})
export class ProjectComponent {
  projects: Project[] = [];

  constructor() {
    this.projects =[
      {
    "id": 1,
    "title": "Angular",
    "description": "Projects that showcase the use of Angular framework for building dynamic web applications.",
    "technologies": ["Angular", "TypeScript", "HTML", "CSS"],
    "image": "/assets/images/angular.png",
    "link": "https://bitbucket.org/jappreetsinghcis/workspace/projects/AN"
    },
    {
    "id": 2,
    "title": "C#",
    "description": "A book management system developed using C# and MS Access.",
    "technologies": ["C#", "MSAcess", "SQL"],
    "image": "/assets/images/ecommerce-platform.png",
    "link": "https://bitbucket.org/jappreetsinghcis/book_management_system/src/main/"
    },
    {
    "id": 3,
    "title": "Php",
    "description": "A blog application built with PHP and MySQL, featuring user authentication and post management.",
    "technologies": ["PHP", "MySQL", "HTML", "CSS"],
    "image": "/assets/images/php.png",
    "link": "https://bitbucket.org/jappreetsinghcis/workspace/projects/CIS4"
    },
    {"id": 4,
    "title": "Java",
    "description": "A simple Java application that demonstrates basic programming concepts.",
    "technologies": ["Java", "Spring Boot", "HTML", "CSS"],
    "image": "/assets/images/java.png",
    "link": "https://bitbucket.org/jappreetsinghcis/workspace/projects/JAV"
    }
    ]
    
  }

}
