import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { SectionsComponent } from './sections.component';
import { SectionCardComponent } from './section-card/section-card.component';
import { ViewComponent } from '../sessions/view/view.component';
import { EditComponent } from '../sessions/edit/edit.component';
import { CreateComponent } from '../sessions/create/create.component';
import { DeleteComponent } from '../sessions/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,


    SectionsComponent,
    SectionCardComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    DeleteComponent
  ],
  exports: [
    SectionsComponent,
    SectionCardComponent
  ]
})
export class SectionsModule {}
