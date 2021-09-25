import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaEmployeesComponent } from './work-area-employees.component';

describe('WorkAreaEmployeesComponent', () => {
  let component: WorkAreaEmployeesComponent;
  let fixture: ComponentFixture<WorkAreaEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAreaEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAreaEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
