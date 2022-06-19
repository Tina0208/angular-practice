import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSelectComponent } from './count-select.component';

describe('CountSelectComponent', () => {
  let component: CountSelectComponent;
  let fixture: ComponentFixture<CountSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
