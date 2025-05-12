import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-vehicle-type',
    templateUrl: './vehicle-type.component.html',
    styleUrls: ['./vehicle-type.component.css'],
    standalone: false
})
export class VehicleTypeComponent implements OnInit {
  @Input() selectedVehicleType = ''

  vehicleTypes: any[] = [
    "Auto",
    "Motor",
    "Scooter"
  ]

  handleChange(value: string) {
    console.log(value)
    this.selectedVehicleType = value
    // this.updatedVehicleType = value
  }

  constructor() { }

  ngOnInit(): void {
  }


}
