import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experienceList: any[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService.getExperience().subscribe({
      next: (data) => {
        this.experienceList = data;
      },
      error: (error) => console.error('Error fetching experience data:', error)
    });
  }
}