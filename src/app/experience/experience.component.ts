import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltDirective } from '../shared/tilt.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements AfterViewInit {
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

    document.querySelectorAll('.fade-in-up, .timeline-item').forEach((el) => {
      observer.observe(el);
    });
  }
}
