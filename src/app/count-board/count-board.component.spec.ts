import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBoardComponent } from './count-board.component';

describe('CountBoardComponent', () => {
  let component: CountBoardComponent;
  let fixture: ComponentFixture<CountBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
