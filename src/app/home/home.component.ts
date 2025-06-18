import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home">
      <img src="../assets/laptop_img.jpg" alt="Home Image" class="home-image">
    <img src="../assets/laptop_img.jpg" id = "background-image" alt="Home Image" class="home-image">
      <div class = "summary">
      <p class="summary-text">
        Hi, I'm <strong>Jappreet Singh</strong>, a passionate software developer with a background in Computer Information Systems from Holland College.
         I specialize in building web and desktop applications using Angular, Java, Kotlin, and C#. My experience spans front-end and back-end development, including REST APIs, database design, and Agile project execution.
          With a focus on clean code, problem solving, and user experience. I aim to craft innovative solutions that drive results and improve lives.
      </p>
    </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
