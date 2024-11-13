import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtestComponent } from './showtest.component';

describe('ShowtestComponent', () => {
  let component: ShowtestComponent;
  let fixture: ComponentFixture<ShowtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
