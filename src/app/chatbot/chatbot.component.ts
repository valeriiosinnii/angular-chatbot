import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['']);
  }
}
