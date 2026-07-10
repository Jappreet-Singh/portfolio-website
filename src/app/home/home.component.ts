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
  templateUrl: './home.component.html',
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

    // Scroll animation observer
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

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxDistance = 60;

    if (distance < maxDistance) {
      const pullX = (distanceX / maxDistance) * 4;
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
