import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, RouterLink, HeaderComponent,CommonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  sidebarExpanded = false;

  onSidebarToggle(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}