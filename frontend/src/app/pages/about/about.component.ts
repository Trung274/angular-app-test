import { Component, OnInit } from '@angular/core';
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

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.css'
// })

// export class AboutComponent implements OnInit {
//   about: any;

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getAboutInfo().subscribe(
//       data => this.about = data,
//       error => console.error('Error fetching about info:', error)
//     );
//   }
// }