import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseFuelComponent } from './dispense-fuel.component';

describe('DispenseFuelComponent', () => {
  let component: DispenseFuelComponent;
  let fixture: ComponentFixture<DispenseFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispenseFuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenseFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
