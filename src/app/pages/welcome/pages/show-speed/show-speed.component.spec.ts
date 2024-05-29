import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpeedComponent } from './show-speed.component';

describe('ShowSpeedComponent', () => {
  let component: ShowSpeedComponent;
  let fixture: ComponentFixture<ShowSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSpeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
