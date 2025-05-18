import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-admins-dashboard',
  standalone: true,               
  imports: [RouterModule],         
  templateUrl: './admins-dashboard.component.html',
  styleUrls: ['./admins-dashboard.component.scss']  
})
export class AdminsDashboardComponent {}