import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_ABOUT } from '../../mock-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = MOCK_ABOUT;
}