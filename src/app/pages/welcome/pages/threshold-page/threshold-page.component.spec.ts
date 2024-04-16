import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdPageComponent } from './threshold-page.component';

describe('ThresholdPageComponent', () => {
  let component: ThresholdPageComponent;
  let fixture: ComponentFixture<ThresholdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThresholdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThresholdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
