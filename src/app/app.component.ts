import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </section>
  `,
})
export class AppComponent {
  title = 'portfolio-website';
}
