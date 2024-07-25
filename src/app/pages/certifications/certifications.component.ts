import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CERTIFICATIONS } from '../../mock-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certificationsList = CERTIFICATIONS;
}