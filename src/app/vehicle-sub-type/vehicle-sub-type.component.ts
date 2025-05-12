import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-sub-type',
  templateUrl: './vehicle-sub-type.component.html',
  styleUrls: ['./vehicle-sub-type.component.css']
})
export class VehicleSubTypeComponent implements OnInit {
  @Input() selectedVehicleType = ''

  isAutoSelected: boolean = true
  isMotorSelected: boolean = false
  isScooterSelected: boolean = false

  vehicleAutoSubTypes: any[] = [
    "Hatchback",
    "Sedan",
    "Station",
    "Cabriolet",
    "Coupé",
    "MPV",
    "Terreinauto"
  ]

  vehicleMotorSubTypes: any[] = [
    "All-road",
    "Naked",
    "Enduro",
    "Race",
    "Toermotor",
    "Chopper",
    "Zijspan"
  ]

  handleClick(event: any) {
    if (event === 'Auto') {
      this.isAutoSelected = true
      this.isMotorSelected = false
      this.isScooterSelected = false
    }
    else if (event === 'Motor') {
      this.isAutoSelected = false
      this.isMotorSelected = true
      this.isScooterSelected = false
    }
    else {
      this.isAutoSelected = false
      this.isMotorSelected = false
      this.isScooterSelected = true
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
