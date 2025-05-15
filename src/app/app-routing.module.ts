import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { ViewComponent } from './sessions/view/view.component';
import { EditComponent } from './sessions/edit/edit.component';
import { DeleteComponent } from './sessions/delete/delete.component';
import { CreateComponent } from './sessions/create/create.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'sections', pathMatch: 'full' },
  { path: 'sections', component: SectionsComponent },
  { path: 'sections/edit/:id', component: EditComponent },  
  { path: 'sessions/create', component: CreateComponent }, 
  { path: 'sessions/view/:id', component: ViewComponent },
  { path: 'sessions/delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
