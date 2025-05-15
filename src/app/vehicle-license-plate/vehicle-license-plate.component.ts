import { Component, Directive, OnInit, viewChild, ViewChild } from '@angular/core'
import { KentekenCheck } from 'rdw-kenteken-check'

@Component({
    selector: 'app-vehicle-license-plate',
    templateUrl: './vehicle-license-plate.component.html',
    styleUrls: ['./vehicle-license-plate.component.css'],
    standalone: false,
})
export class VehicleLicensePlateComponent implements OnInit {
  inputValue: string = ''
  result: string = ''
  isCorrectValue: boolean = true

  verifyLicensePlate() {
    if (this.inputValue) {
      const kt = new KentekenCheck(this.inputValue)
      this.result = kt.formatLicense()

      if (this.result === 'XX-XX-XX') {
        this.isCorrectValue = false
      }
      else {
        this.isCorrectValue = true
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
