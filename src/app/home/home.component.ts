import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <p>
      home works!
      <app-navbar></app-navbar>
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
