import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-text">JS</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="desktop-nav">
          <ul class="nav-links">
            <li>
              <a
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li>
              <a routerLink="/projects" routerLinkActive="active">Projects</a>
            </li>
          </ul>

          <div class="social-links">
            <a
              href="https://github.com/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          aria-label="Toggle menu"
        >
          <i
            class="fas"
            [class.fa-bars]="!isMobileMenuOpen"
            [class.fa-times]="isMobileMenuOpen"
          ></i>
        </button>
      </div>

      <!-- Mobile Nav Drawer -->
      <div class="mobile-nav" [class.open]="isMobileMenuOpen">
        <ul class="mobile-links">
          <li>
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              (click)="closeMobileMenu()"
              >Home</a
            >
          </li>
          <li>
            <a
              routerLink="/projects"
              routerLinkActive="active"
              (click)="closeMobileMenu()"
              >Projects</a
            >
          </li>
        </ul>
        <div class="mobile-socials">
          <a
            href="https://github.com/#"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://linkedin.com/in/#"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin"></i
          ></a>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
