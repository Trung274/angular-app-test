import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList: any[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.educationService.getEducation().subscribe({
      next: (data) => {
        this.educationList = data;
        console.log('Education data:', data);
      },
      error: (error) => console.error('Error fetching education:', error)
    });
  }
}