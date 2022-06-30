import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartReactiveFormComponent } from './start-reactive-form.component';

describe('StartReactiveFormComponent', () => {
  let component: StartReactiveFormComponent;
  let fixture: ComponentFixture<StartReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
