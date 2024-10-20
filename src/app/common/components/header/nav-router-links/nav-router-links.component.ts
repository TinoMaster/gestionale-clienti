import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-router-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-router-links.component.html',
  styleUrl: './nav-router-links.component.css',
})
export class NavRouterLinksComponent {
  currentRoute: string = '';
  segments: string[] = [];

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    this.segments = this.currentRoute.split('/');
  }

  ngOnInit(): void {
    // Escuchar cambios en la navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd)) // Filtra solo los eventos de finalización de navegación
      .subscribe((event: NavigationEnd) => {
        // Actualiza la ruta actual
        this.currentRoute = event.url;
        this.segments = this.currentRoute.split('/');
      });
  }
}
