import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReactiveFormComponent } from './assignment-reactive-form.component';

describe('AssignmentReactiveFormComponent', () => {
  let component: AssignmentReactiveFormComponent;
  let fixture: ComponentFixture<AssignmentReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
