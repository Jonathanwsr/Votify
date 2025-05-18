import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private userRole: string | null = null;

  constructor(private router: Router) {}

 
  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }

  
  getRole(): string | null {
    return this.userRole || localStorage.getItem('userRole');
  }

  
  clearRole(): void {
    this.userRole = null;
    localStorage.removeItem('userRole');
  }

  setFirstAccessDone(): void {
    localStorage.setItem('firstAccessDone', 'true');
  }

 
  isFirstAccess(): boolean {
    return localStorage.getItem('firstAccessDone') !== 'true';
  }

  
  clearFirstAccess(): void {
    localStorage.removeItem('firstAccessDone');
  }

  
  redirectUserAfterLogin(): void {
    const role = this.getRole();

    if (this.isFirstAccess()) {
      this.setFirstAccessDone();
      this.router.navigate(['/welcome']);
      return;
    }

    switch (role) {
      case 'ASSOCIATE':
        this.router.navigate(['/associates']);
        break;
      case 'ORGANIZER':
        this.router.navigate(['/organizers']);
        break;
      case 'ADMIN':
        this.router.navigate(['/admins']);
        break;
      default:
        this.router.navigate(['/']); 
    }
  }
}
