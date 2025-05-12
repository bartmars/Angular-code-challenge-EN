import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent implements OnInit {
  vehicleTypes: any[] = [
    {
      id: 1,
      type: 'Auto'
    },
    {
      id: 2,
      type: 'Motor'
    },
    {
      id: 3,
      type: 'Scooter'
    }
  ]

  items: any[] = [
    "Auto",
    "Motor",
    "Scooter"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
