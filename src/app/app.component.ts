import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
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
