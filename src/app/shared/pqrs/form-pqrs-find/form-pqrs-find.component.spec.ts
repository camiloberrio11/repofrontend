import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPqrsFindComponent } from './form-pqrs-find.component';

describe('FormPqrsFindComponent', () => {
  let component: FormPqrsFindComponent;
  let fixture: ComponentFixture<FormPqrsFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPqrsFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPqrsFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
