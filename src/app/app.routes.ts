import { Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { ViewComponent } from './sessions/view/view.component';
import { EditComponent } from './sessions/edit/edit.component';
import { DeleteComponent } from './sessions/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(m => m.LandingComponent)
  },

  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login/login.component').then(m => m.LoginComponent)
  },

  { path: 'sections', component: SectionsComponent },
  { path: 'sections/edit/:id', component: EditComponent },
  { path: 'sessions/view/:id', component: ViewComponent },
  { path: 'sessions/delete/:id', component: DeleteComponent },

  {
    path: 'sessions/create',
    loadComponent: () =>
      import('./sessions/create/create.component').then(m => m.CreateComponent)
  },

  {
    path: 'associates',
    loadComponent: () =>
      import('./paths/associates/associates-dashboard/associates-dashboard.component')
        .then(m => m.AssociatesDashboardComponent)
  },

  {
    path: 'organizers',
    loadComponent: () =>
      import('./paths/organizers/organizers-dashboard/organizers-dashboard.component')
        .then(m => m.OrganizersDashboardComponent)
  },

  {
    path: 'admins',
    loadComponent: () =>
      import('./paths/admins/admins-dashboard/admins-dashboard.component')
        .then(m => m.AdminsDashboardComponent)
  }
];
