import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SessionsService } from '../../sections/services/sessions.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-session',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  form: any;
  errors: string[] = [];

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionsService,
    private router: Router
  ) {
   
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      organizerId: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    const token = localStorage.getItem('token') || '';

    this.sessionService.createSession(this.form.value, token).subscribe({
      next: () => this.router.navigate(['/sections']),
      error: (err: any) => {
        this.errors = err.error?.errors || [err.error?.message || 'Erro desconhecido.'];
      }
    });
  }
}
