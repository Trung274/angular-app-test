import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  about: any;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.getAbout().subscribe({
      next: (data) => {
        this.about = data;
        console.log('About data:', data);
      },
      error: (error) => console.error('Error fetching about info:', error)
    });
  }
}