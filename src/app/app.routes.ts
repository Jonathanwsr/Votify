import { Routes } from '@angular/router';
import { SectionsComponent } from './features/sessions/sessions-compoents/sections.component';
import { ViewComponent } from './features/sessions/section-card/view/view.component';
import { EditComponent } from './features/sessions/section-card/edit/edit.component';
import { DeleteComponent } from './features/sessions/section-card/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(m => m.LandingComponent)
  },

  {
    path: 'welcome',
    loadComponent: () =>
      import('./features/welcome/welcome.component').then(m => m.WelcomeComponent)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },

  { path: 'sections', component: SectionsComponent },
  { path: 'sections/edit/:id', component: EditComponent },
  { path: 'sessions/view/:id', component: ViewComponent },
  { path: 'sessions/delete/:id', component: DeleteComponent },

  {
    path: 'sessions/create',
    loadComponent: () =>
      import('./features/sessions/section-card/create/create.component').then(m => m.CreateComponent)
  },

  {
    path: 'associates',
    loadComponent: () =>
      import('./features/paths/associates/associates-dashboard/associates-dashboard.component')
        .then(m => m.AssociatesDashboardComponent)
  },

  {
    path: 'organizers',
    loadComponent: () =>
      import('./features/paths/organizers/organizers-dashboard/organizers-dashboard.component')
        .then(m => m.OrganizersDashboardComponent)
  },

  {
    path: 'admins',
    loadComponent: () =>
      import('./features/paths/admins/admins-dashboard/admins-dashboard.component')
        .then(m => m.AdminsDashboardComponent)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];
