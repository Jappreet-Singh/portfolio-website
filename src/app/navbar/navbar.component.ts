import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      navbar works!
    </p>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
