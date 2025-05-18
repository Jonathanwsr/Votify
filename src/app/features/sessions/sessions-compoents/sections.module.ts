import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { SectionsComponent } from './sections.component';
import { SectionCardComponent } from '../../../features/sessions/section-card/section-card.component';
import { ViewComponent } from '../../../features/sessions/section-card/view/view.component';
import { EditComponent } from '../../../features/sessions/section-card/edit/edit.component';
import { CreateComponent } from '../../../features/sessions/section-card/create/create.component';
import { DeleteComponent } from '../../../features/sessions/section-card/delete/delete.component';

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
