import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToAssociates(): void {
    this.router.navigate(['/associates']);
  }

  goToOrganizers(): void {
    this.router.navigate(['/organizers']);
  }

  goToAdmins(): void {
    this.router.navigate(['/admins']);
  }
}
