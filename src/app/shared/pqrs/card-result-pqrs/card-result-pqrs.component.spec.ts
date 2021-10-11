import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultPqrsComponent } from './card-result-pqrs.component';

describe('CardResultPqrsComponent', () => {
  let component: CardResultPqrsComponent;
  let fixture: ComponentFixture<CardResultPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultPqrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
