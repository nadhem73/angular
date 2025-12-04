import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  onNotificationClick(): void {
    // Fonctionnalité non implémentée - redirection vers 404
    this.router.navigate(['/page-non-disponible']);
  }

  onProfileClick(): void {
    // Fonctionnalité non implémentée - redirection vers 404
    this.router.navigate(['/profil-non-disponible']);
  }
}
