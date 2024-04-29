import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewRouteComponent } from './set-new-route.component';

describe('SetNewRouteComponent', () => {
  let component: SetNewRouteComponent;
  let fixture: ComponentFixture<SetNewRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetNewRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
