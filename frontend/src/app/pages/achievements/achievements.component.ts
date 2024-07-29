import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsService } from '../../services/achievements.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent implements OnInit {
  achievementsList: any[] = [];

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit() {
    this.achievementsService.getAchievements().subscribe({
      next: (data) => {
        this.achievementsList = data;
        console.log('Achievements data:', data);
      },
      error: (error) => console.error('Error fetching achievements:', error)
    });
  }
}