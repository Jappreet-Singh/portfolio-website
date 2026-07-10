import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <!-- Global Floating Background Orbs -->
    <div class="background-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'portfolio-website';
}
