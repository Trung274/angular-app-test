import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillsList: any[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        this.skillsList = data;
        console.log('Skills data:', data);
      },
      error: (error) => {
        console.error('Error fetching skills:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was:`, error.error);
        }
      }
    });
  }
}