import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePictureComponent } from './vehicle-picture.component';

describe('VehiclePictureComponent', () => {
  let component: VehiclePictureComponent;
  let fixture: ComponentFixture<VehiclePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
