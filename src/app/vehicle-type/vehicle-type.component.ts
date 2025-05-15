import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css'],
  standalone: false
})
export class VehicleTypeComponent implements OnInit {
  @Input() selectedVehicleType = ''
  @Output() updateVehicleType = new EventEmitter<string>();

  vehicleTypes: any[] = [
    "Auto",
    "Motor",
    "Scooter"
  ]

  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value
    this.updateVehicleType.emit(selectedValue)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
