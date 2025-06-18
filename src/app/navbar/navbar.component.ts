import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <section class="navbar">
      <nav class="navbar-links">
        <ul class="nav-links">
          <li><a class="a-navLinks" routerLink="/" href="/">Home</a></li>
          <li><a class="a-navLinks" routerLink="/projects" href="/projects">Projects</a></li>
          <!-- <li><a routerLink="/contact" href="/contact">Contact</a></li> -->
        </ul>
        <ul class="social-links">
          <li class="li-socials"><a class="a-socials" href="https://www.linkedin.com/in/jappreet-singh-2441362a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCeWa88zmT9%2B%2FYPmMzvkFIA%3D%3D" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
        </ul>
        </nav>
    </section>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
