import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(): boolean {
    // En una aplicación real, aquí iría la lógica de autenticación.
    // Por ahora, simulamos un login exitoso y guardamos el estado.
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}