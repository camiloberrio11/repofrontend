import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPqrsResumeComponent } from './card-pqrs-resume.component';

describe('CardPqrsResumeComponent', () => {
  let component: CardPqrsResumeComponent;
  let fixture: ComponentFixture<CardPqrsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPqrsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPqrsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
