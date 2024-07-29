import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContact().subscribe({
      next: (data) => {
        this.contact = data;
        console.log('Contact data:', data);
      },
      error: (error) => console.error('Error fetching contact info:', error)
    });
  }
}