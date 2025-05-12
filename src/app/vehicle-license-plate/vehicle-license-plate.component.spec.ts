import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLicensePlateComponent } from './vehicle-license-plate.component';

describe('VehicleLicensePlateComponent', () => {
  let component: VehicleLicensePlateComponent;
  let fixture: ComponentFixture<VehicleLicensePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLicensePlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLicensePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
