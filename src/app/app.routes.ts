import { Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { ViewComponent } from './sessions/view/view.component';
import { EditComponent } from './sessions/edit/edit.component';
import { DeleteComponent } from './sessions/delete/delete.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sections', pathMatch: 'full' },
  { path: 'sections', component: SectionsComponent },
  { path: 'sections/edit/:id', component: EditComponent },
  { path: 'sessions/view/:id', component: ViewComponent },
  { path: 'sessions/delete/:id', component: DeleteComponent },

 
  { 
    path: 'sessions/create', 
    loadComponent: () => import('./sessions/create/create.component').then(m => m.CreateComponent) 
  }
];
