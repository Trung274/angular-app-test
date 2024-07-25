import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION } from '../../mock-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = EDUCATION;
}