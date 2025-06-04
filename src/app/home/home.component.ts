import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home">
      <img src="../assets/laptop_img.jpg" alt="Home Image" class="home-image">
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
