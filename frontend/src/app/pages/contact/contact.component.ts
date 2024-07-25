import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT } from '../../mock-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = CONTACT;
}