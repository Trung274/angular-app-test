import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../mock-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceList = EXPERIENCE;
}