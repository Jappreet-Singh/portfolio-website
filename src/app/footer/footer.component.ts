import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Jappreet Singh</h3>
          <p>Building AI-integrated web systems and full-stack applications.</p>
        </div>
        
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/projects">Projects</a></li>
            <li><a href="https://linkedin.com/in/#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contact</h4>
          <a href="mailto:jappreet@example.com" class="contact-email">
            <i class="fas fa-envelope"></i>
            <!-- TODO: Replace with real email -->
            jappreet&#64;example.com
          </a>
          <div class="social-icons">
            <a href="https://github.com/#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Jappreet Singh. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
