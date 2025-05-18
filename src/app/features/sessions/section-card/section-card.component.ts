import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Session } from '../../../features/sessions/session.model';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss'],
})
export class SectionCardComponent {
  @Input() session!: Session;
}
