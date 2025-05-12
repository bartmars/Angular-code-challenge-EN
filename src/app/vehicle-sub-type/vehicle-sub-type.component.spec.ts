import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSubTypeComponent } from './vehicle-sub-type.component';

describe('VehicleSubTypeComponent', () => {
  let component: VehicleSubTypeComponent;
  let fixture: ComponentFixture<VehicleSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSubTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
