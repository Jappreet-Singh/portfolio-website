import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background">
      <img class="background-img" src="./assets/laptop_img.png" alt="Logo" />
    </div>
    <div class="projects-container">
      <div
        ngClass="project"
        *ngFor="let project of projects"
        class="project-card"
      >
        <img
          class="logo-image"
          [src]="project.image"
          alt="{{ project.title }}"
        />
        <h3>{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <p class="technologies">
          <strong >Technologies:</strong> {{ project.technologies.join(', ') }}
        </p>
        <a class="project-link" [href]="project.link" target="_blank"
          >View Projects</a
        >
      </div>
    </div>
  `,
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: Project[] = [];

  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Angular',
        description:
          'Projects that showcase the use of Angular framework for building dynamic web applications.',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        image: './assets/logo-angular.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/AN',
      },
      {
        id: 2,
        title: 'C#',
        description:
          'Projects that showcase apps made with help of visual studio and C# programming language.',
        technologies: ['C#', 'MSAcess', 'SQL'],
        image: './assets/logo-csharp.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/CIS',
      },
      {
        id: 3,
        title: 'Php',
        description:
          'Projects that showcase use of PHP for server-side scripting and web development.',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
        image: './assets/logo-php.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/CIS4',
      },
      {
        id: 4,
        title: 'Java',
        description:
          'Projects that showcase the use of Java for building robust applications with help of Spring Boot.',
        technologies: ['Java', 'Spring Boot', 'HTML', 'CSS'],
        image: './assets/logo-java.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/JAV',
      },
    ];
  }
}
