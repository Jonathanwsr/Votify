import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesDashboardComponent } from './associates-dashboard.component';

describe('AssociatesDashboardComponent', () => {
  let component: AssociatesDashboardComponent;
  let fixture: ComponentFixture<AssociatesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociatesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociatesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
