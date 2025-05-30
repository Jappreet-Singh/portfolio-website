import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p id=#about>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent {

}
