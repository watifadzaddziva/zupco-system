import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFuelLevelComponent } from './set-fuel-level.component';

describe('SetFuelLevelComponent', () => {
  let component: SetFuelLevelComponent;
  let fixture: ComponentFixture<SetFuelLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetFuelLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetFuelLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
