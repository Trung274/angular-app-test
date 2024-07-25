import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-themePrimary shadow-lg rounded-lg overflow-hidden">
      <img [src]="project.thumbnail" [alt]="project.title" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold text-themeSecondary mb-2">{{project.title}}</h3>
        <p class="text-gray-600 mb-4">{{project.shortDescription}}</p>
        <a [routerLink]="['/projects', project.id]" class="text-themeAccent hover:underline">View Details</a>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() project: any;
}