import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-sub-type',
  templateUrl: './vehicle-sub-type.component.html',
  styleUrls: ['./vehicle-sub-type.component.css'],
  standalone: false
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

  handleChange(event: Event) {

  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedVehicleType'] && changes['selectedVehicleType'].currentValue) {
      if (this.selectedVehicleType === 'Auto') {
        this.isAutoSelected = true
        this.isMotorSelected = false
        this.isScooterSelected = false
      }
      else if (this.selectedVehicleType === 'Motor') {
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
  }

}
