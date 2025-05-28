import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="navbar">
      <nav class="navbar-links">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
