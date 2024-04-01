import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  getResponse(userInput: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      messages: [{ role: 'user', content: userInput }],
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
