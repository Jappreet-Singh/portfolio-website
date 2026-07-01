import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  @Input() tiltMaxAngle = 8;
  @Input() tiltScale = 1.02;
  @Input() tiltGlare = true;

  private isTouchDevice = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Initial styling
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
    this.renderer.setStyle(this.el.nativeElement, 'transform-style', 'preserve-3d');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isTouchDevice || this.prefersReducedMotion()) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    
    // Calculate mouse position relative to element center (-1 to 1)
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    
    const multiplierX = (x - 0.5) * 2; // -1 to 1
    const multiplierY = (y - 0.5) * 2; // -1 to 1

    const rotateX = multiplierY * -this.tiltMaxAngle;
    const rotateY = multiplierX * this.tiltMaxAngle;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${this.tiltScale})`
    );

    if (this.tiltGlare) {
      // Set CSS variables for the spotlight glow effect
      this.renderer.setStyle(this.el.nativeElement, '--mouse-x', `${event.clientX - rect.left}px`);
      this.renderer.setStyle(this.el.nativeElement, '--mouse-y', `${event.clientY - rect.top}px`);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isTouchDevice || this.prefersReducedMotion()) return;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
    );
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
