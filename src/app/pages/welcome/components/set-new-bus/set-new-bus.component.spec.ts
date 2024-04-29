import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewBusComponent } from './set-new-bus.component';

describe('SetNewBusComponent', () => {
  let component: SetNewBusComponent;
  let fixture: ComponentFixture<SetNewBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetNewBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetNewBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
