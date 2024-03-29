import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  myContact : Contacts = {
    id: 0,
    name: "Valerii"
  }

  contactList : Contacts[] = [
    {id: 1,
    name: "Pyshik"},
    {id: 2,
    name: "Bogdan"},
    {id: 3,
    name: "Marco"}
  ]
}
