import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltDirective } from '../shared/tilt.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  template: `
    <section class="section-container experience-section" id="experience">
      <div class="section-header fade-in-up">
        <h2>Experience & Education</h2>
        <p>My professional and academic journey.</p>
      </div>

      <div class="timeline">
        <!-- Cogsdale Experience -->
        <div class="timeline-item fade-in-up">
          <div class="timeline-dot"></div>
          <div class="timeline-content glass-card spotlight-glow" appTilt [tiltMaxAngle]="4" [tiltScale]="1.01">
            <div class="content-header">
              <div class="title-group">
                <h3>AI Process & Optimization Intern</h3>
                <span class="company">Cogsdale Corporation</span>
              </div>
              <span class="period">Feb 2025 – Apr 2025</span>
            </div>
            <ul class="highlights">
              <li>Evaluated AI agent infrastructure to improve internal workflows and customer support.</li>
              <li>Built and deployed a beta AI support agent using Microsoft Copilot Studio.</li>
              <li>Authored 20+ pages of comprehensive technical documentation detailing system architecture and process optimization strategies.</li>
            </ul>
          </div>
        </div>

        <!-- Holland College Education -->
        <div class="timeline-item fade-in-up" style="animation-delay: 0.2s">
          <div class="timeline-dot"></div>
          <div class="timeline-content glass-card spotlight-glow" appTilt [tiltMaxAngle]="4" [tiltScale]="1.01">
            <div class="content-header">
              <div class="title-group">
                <h3>Computer Information Systems</h3>
                <span class="company">Holland College</span>
              </div>
              <span class="period">2023 – 2025</span>
            </div>
            <ul class="highlights">
              <li>Focused on full-stack development, database design, and software engineering principles.</li>
              <li>Completed capstone projects integrating frontend frameworks (Angular) with robust backends (Java, C#).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Setup intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }
}
