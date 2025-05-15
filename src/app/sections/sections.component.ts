import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';  
import { SessionsService } from './services/sessions.service';
import { SectionCardComponent } from './section-card/section-card.component';
import { Session } from './models/session.model';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,        
    SectionCardComponent
  ],
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  token = '';
  resultado: Session[] = [];
  erro: any = null;

  constructor(private sessionsService: SessionsService) {}

  buscarSessoes() {
    this.sessionsService.getAll(this.token).subscribe({
      next: (data) => {
        this.resultado = data.results || [];
        this.erro = null;
      },
      error: (err) => {
        this.erro = err;
        this.resultado = [];
      },
    });
  }
}
