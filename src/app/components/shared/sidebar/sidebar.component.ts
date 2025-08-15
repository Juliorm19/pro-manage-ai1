import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserProfileComponent, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  startNewQuery() {
    // Navega a la vista de bienvenida o a la que se defina como principal
    this.router.navigate(['/app/welcome']);
  }
}