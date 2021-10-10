import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPqrsCreateComponent } from './form-pqrs-create.component';

describe('FormPqrsCreateComponent', () => {
  let component: FormPqrsCreateComponent;
  let fixture: ComponentFixture<FormPqrsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPqrsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPqrsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
