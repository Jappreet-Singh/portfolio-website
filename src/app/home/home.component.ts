import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  template: `
    <p>
      home works!
    </p>
    <app-about></app-about>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
