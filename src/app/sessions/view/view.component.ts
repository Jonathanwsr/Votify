import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Session } from '../../sections/models/session.model';
import { SessionsService } from '../../sections/services/sessions.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-view-session',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  session?: Session;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private sessionsService: SessionsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const token = localStorage.getItem('token') || '';

    this.sessionsService.getById(id, token).subscribe({
      next: (session) => (this.session = session),
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.error?.message || 'Erro ao carregar sessão.';
      },
    });
  }
}
