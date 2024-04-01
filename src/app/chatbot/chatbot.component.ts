import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenaiService } from '../openai.service';
import { HttpClientModule } from '@angular/common/http';
import { OpenAIResponse } from '../interfaces/openai-response.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  providers: [OpenaiService],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  constructor(private router: Router, private openaiService: OpenaiService) {}

  backToHome() {
    this.router.navigate(['']);
  }

  userMessage: string = '';
  conversation: string[] = [];

  sendMessage() {
    this.conversation.push(`You: ${this.userMessage}`);
    this.openaiService.getResponse(this.userMessage).subscribe({
      next: (response: OpenAIResponse) => {
        if (
          response.choices &&
          response.choices.length > 0 &&
          response.choices[0].message.content
        ) {
          this.conversation.push(
            `Bot: ${response.choices[0].message.content.trim()}`
          );
        } else {
          console.error(
            'Received unexpected response format from OpenAI:',
            response
          );
          this.conversation.push(`Bot: I'm sorry, I didn't catch that.`);
        }
        this.userMessage = '';
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.conversation.push(`Bot: Sorry, I couldn't fetch a response.`);
      },
    });
  }
}
