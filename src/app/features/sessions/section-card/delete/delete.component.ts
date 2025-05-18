import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Session } from '../../../../features/sessions/session.model';
import { SessionsService } from '../../../../core/services/sessions.service';

@Component({
  selector: 'app-delete-session',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  sessionId!: number;
  session?: Session;
  token: string = localStorage.getItem('token') || '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionsService: SessionsService
  ) {}

  ngOnInit(): void {
    this.sessionId = Number(this.route.snapshot.paramMap.get('id'));
    this.sessionsService.getById(this.sessionId, this.token).subscribe({
      next: (data) => this.session = data,
      error: (err) => console.error('Erro ao carregar sessão', err)
    });
  }

  confirmarExclusao(): void {
    this.sessionsService.delete(this.sessionId, this.token).subscribe({
      next: () => this.router.navigate(['/sections']),
      error: (err) => console.error('Erro ao excluir sessão', err)
    });
  }

  cancelar(): void {
    this.router.navigate(['/sections']);
  }
}
