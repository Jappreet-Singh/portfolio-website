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
        <p>{{ project.description }}</p>
        <a class="project-link" [href]="project.link" target="_blank"
          >View Project</a
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
          'A book management system developed using C# and MS Access.',
        technologies: ['C#', 'MSAcess', 'SQL'],
        image: './assets/logo-csharp.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/CIS',
      },
      {
        id: 3,
        title: 'Php',
        description:
          'A blog application built with PHP and MySQL, featuring user authentication and post management.',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
        image: './assets/logo-php.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/CIS4',
      },
      {
        id: 4,
        title: 'Java',
        description:
          'A simple Java application that demonstrates basic programming concepts.',
        technologies: ['Java', 'Spring Boot', 'HTML', 'CSS'],
        image: './assets/logo-java.png',
        link: 'https://bitbucket.org/jappreetsinghcis/workspace/projects/JAV',
      },
    ];
  }
}
