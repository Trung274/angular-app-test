import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../../mock-data';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = PROJECTS.find(p => p.id === projectId);
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }
}