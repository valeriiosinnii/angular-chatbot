import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'chatbot', component: ChatbotComponent, title: 'Chat Page' },
];

export default routeConfig;
