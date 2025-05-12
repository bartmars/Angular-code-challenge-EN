import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-picture',
  templateUrl: './vehicle-picture.component.html',
  styleUrls: ['./vehicle-picture.component.css'],
  standalone: false
})
export class VehiclePictureComponent implements OnInit {
  @Input() selectedVehicleType = ''

  vehicleType: string = ''

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedVehicleType'] && changes['selectedVehicleType'].currentValue) {
      this.vehicleType = `./assets/${this.selectedVehicleType.toLowerCase()}.jpg`
    }
  }

}
