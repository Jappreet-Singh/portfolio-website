import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SkillsComponent, ExperienceComponent],
  template: `
    <!-- Floating Background Orbs -->
    <div class="background-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Hero Section with Parallax -->
    <section class="hero" #heroSection>
      <div
        class="hero-bg-layer mesh-gradient"
        [style.transform]="
          'translate(' + mouseX * 0.01 + 'px, ' + mouseY * 0.01 + 'px)'
        "
      ></div>
      <div
        class="hero-bg-layer dot-grid"
        [style.transform]="
          'translate(' + mouseX * 0.02 + 'px, ' + mouseY * 0.02 + 'px)'
        "
      ></div>

      <div class="hero-content section-container">
        <div class="hero-text fade-in-up">
          <div class="badge">Available for hire</div>
          <h1 class="name">
            Hi, I'm <span class="highlight">Jappreet Singh</span>
          </h1>
          <h2 class="title">Full Stack & AI Developer</h2>
          <p class="summary">
            Specializing in modern web applications, REST APIs, and
            AI-integrated systems (like RAG pipelines). I craft innovative
            solutions with clean code.
          </p>
          <div class="cta-group">
            <a routerLink="/projects" class="btn btn-primary">
              <i class="fas fa-rocket"></i> View My Work
            </a>
            <a
              href="https://github.com/#"
              target="_blank"
              class="btn btn-secondary magnetic-btn"
              #magneticBtn1
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/#"
              target="_blank"
              class="btn btn-secondary magnetic-btn"
              #magneticBtn2
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <div class="hero-visual fade-in-up" style="animation-delay: 0.2s">
          <div class="terminal">
            <div class="terminal-header">
              <span class="dot red"></span><span class="dot yellow"></span
              ><span class="dot green"></span>
            </div>
            <div class="terminal-body">
              <div class="code-line">
                <span class="keyword">const</span>
                <span class="method">developer</span> =
                <span class="keyword">new</span>
                <span class="class">SoftwareEngineer</span>();
              </div>

              <div class="code-line">
                developer.<span class="method">setSkills</span>([
              </div>

              <div class="code-line">
                &nbsp;&nbsp;<span class="string">'Angular'</span>,
                <span class="string">'FastAPI'</span>,
                <span class="string">'Python'</span>,
                <span class="string">'C#'</span>
              </div>

              <div class="code-line">]);</div>

              <div class="code-line">
                developer.<span class="method">initializeAI</span>(&#123;
              </div>

              <div class="code-line">
                &nbsp;&nbsp;<span class="operator">type:</span>
                <span class="string">'RAG Pipeline'</span>,
              </div>

              <div class="code-line">
                &nbsp;&nbsp;<span class="operator">status:</span>
                <span class="string">'Optimized'</span>
              </div>

              <div class="code-line">&#125;);</div>

              <div class="prompt">
                <!-- <span class="keyword">&gt;</span> -->
                <span class="cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Skills Section -->
    <app-skills></app-skills>

    <!-- Experience Timeline Section -->
    <app-experience></app-experience>

    <!-- Featured Projects Preview -->
    <section class="projects-preview section-container">
      <div class="section-header fade-in-up">
        <h2>Featured Projects</h2>
        <p>A glimpse into what I've been building</p>
      </div>

      <div class="preview-cards">
        <div class="glass-card preview-card spotlight-glow">
          <div class="card-content">
            <i
              class="fas fa-robot text-accent"
              style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent-primary);"
            ></i>
            <h3>AI Chatbot / RAG System</h3>
            <p>
              An intelligent agent capable of retrieving and generating answers
              from custom data.
            </p>
            <a routerLink="/projects" class="text-link"
              >See Details <i class="fas fa-arrow-right"></i
            ></a>
          </div>
        </div>
        <div
          class="glass-card preview-card spotlight-glow"
          style="animation-delay: 0.1s"
        >
          <div class="card-content">
            <i
              class="fas fa-chart-line text-accent"
              style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent-primary);"
            ></i>
            <h3>Angular E-Commerce App</h3>
            <p>
              A high-performance modern storefront built with Angular and
              standalone components.
            </p>
            <a routerLink="/projects" class="text-link"
              >See Details <i class="fas fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="view-all-wrapper fade-in-up" style="animation-delay: 0.2s">
        <a routerLink="/projects" class="btn btn-outline">View All Projects</a>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('magneticBtn1') magneticBtn1!: ElementRef;
  @ViewChild('magneticBtn2') magneticBtn2!: ElementRef;

  mouseX = 0;
  mouseY = 0;
  isTouchDevice = false;

  ngAfterViewInit() {
    this.isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Scroll animation observer for preview section
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

    document
      .querySelectorAll('.fade-in-up, .preview-card, .view-all-wrapper')
      .forEach((el) => {
        observer.observe(el);
      });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isTouchDevice || this.prefersReducedMotion()) return;

    // Update parallax coordinates
    this.mouseX = event.clientX - window.innerWidth / 2;
    this.mouseY = event.clientY - window.innerHeight / 2;

    // Apply global spotlight variable to hero
    if (this.heroSection) {
      this.heroSection.nativeElement.style.setProperty(
        '--mouse-x',
        `${event.clientX}px`,
      );
      this.heroSection.nativeElement.style.setProperty(
        '--mouse-y',
        `${event.clientY}px`,
      );
    }

    // Apply magnetic effect to buttons
    this.applyMagneticEffect(
      this.magneticBtn1?.nativeElement,
      event.clientX,
      event.clientY,
    );
    this.applyMagneticEffect(
      this.magneticBtn2?.nativeElement,
      event.clientX,
      event.clientY,
    );
  }

  private applyMagneticEffect(
    element: HTMLElement,
    mouseX: number,
    mouseY: number,
  ) {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Proximity zone (e.g. 60px around the button)
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxDistance = 60;

    if (distance < maxDistance) {
      // Pull button towards cursor
      const pullX = (distanceX / maxDistance) * 4; // max 4px pull
      const pullY = (distanceY / maxDistance) * 4;
      element.style.transform = `translate(${pullX}px, ${pullY}px)`;
    } else {
      element.style.transform = 'translate(0px, 0px)';
    }
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
