import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../mock-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsList = SKILLS;
}