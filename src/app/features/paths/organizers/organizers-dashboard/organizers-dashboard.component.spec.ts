import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersDashboardComponent } from './organizers-dashboard.component';

describe('OrganizersDashboardComponent', () => {
  let component: OrganizersDashboardComponent;
  let fixture: ComponentFixture<OrganizersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizersDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
