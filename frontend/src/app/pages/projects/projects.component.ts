import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-themeAccent mb-6">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (project of projects; track project.id) {
          <app-project-card [project]="project"></app-project-card>
        } @empty {
        <p>No projects available.</p>
      }
      </div>
    </div>
  `
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => console.error('Error fetching projects data:', error)
    });
  }
}