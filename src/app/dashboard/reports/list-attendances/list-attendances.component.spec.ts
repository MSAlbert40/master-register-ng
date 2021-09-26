import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttendancesComponent } from './list-attendances.component';

describe('ListAttendancesComponent', () => {
  let component: ListAttendancesComponent;
  let fixture: ComponentFixture<ListAttendancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAttendancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
