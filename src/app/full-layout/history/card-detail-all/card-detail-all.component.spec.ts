import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailAllComponent } from './card-detail-all.component';

describe('CardDetailAllComponent', () => {
  let component: CardDetailAllComponent;
  let fixture: ComponentFixture<CardDetailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
