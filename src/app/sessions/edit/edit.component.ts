import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionsService } from '../../sections/services/sessions.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-session',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  errors: string[] = [];
  id!: number;

  
  session: {
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    organizer?: any; 
  } = {
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    organizer: undefined,
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: SessionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

  
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
  
      organizerId: ['', Validators.required],
    });

    const token = localStorage.getItem('token') || '';
    this.service.getById(this.id, token).subscribe({
      next: (data) => {
     
        this.session = {
          title: data.title,
          description: data.description,
          start_date: data.start_date,
          end_date: data.end_date,
          organizer: data.organizer, 
        };

       
        this.form.patchValue({
          title: data.title,
          description: data.description,
          start_date: data.start_date,
          end_date: data.end_date,
          organizerId: data.organizer?.id || '', 
        });
      },
      error: (err) => {
        this.errors = [err.error.message || 'Sessão não encontrada.'];
      }
    });
  }

  update() {
    if (this.form.invalid) return;

   
    const payload = {
      ...this.form.value,
      organizer: { id: this.form.value.organizerId }
    };

    const token = localStorage.getItem('token') || '';
    this.service.update(this.id, payload, token).subscribe({
      next: () => this.router.navigate(['/sections']),
      error: (err) => {
        this.errors = err.error.errors || [err.error.message || 'Erro desconhecido.'];
      }
    });
  }
}
