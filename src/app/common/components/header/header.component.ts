import { Component } from '@angular/core';
import { NavRouterLinksComponent } from './nav-router-links/nav-router-links.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavRouterLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
