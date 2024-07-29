import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsService } from '../../services/certifications.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit {
  certificationsList: any[] = [];

  constructor(private certificationsService: CertificationsService) {}

  ngOnInit() {
    this.certificationsService.getCertifications().subscribe({
      next: (data) => {
        this.certificationsList = data;
        console.log('Certifications data:', data);
      },
      error: (error) => console.error('Error fetching certifications:', error)
    });
  }
}