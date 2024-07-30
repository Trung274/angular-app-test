import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoService } from '../../services/personal-info.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  personalInfo: any = {};
  loading: boolean = true;
  error: string | null = null;

  constructor(private personalInfoService: PersonalInfoService) {}

  ngOnInit() {
    this.personalInfoService.getPersonalInfo().subscribe({
      next: (data) => {
        this.personalInfo = data;
        this.loading = false;
        console.log('Personal info:', this.personalInfo);
      },
      error: (error) => {
        console.error('Error fetching personal info:', error);
        this.error = 'Failed to load personal information';
        this.loading = false;
      }
    });
  }
}