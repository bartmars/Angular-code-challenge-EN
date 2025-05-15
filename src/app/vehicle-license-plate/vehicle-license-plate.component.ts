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
  isCorrectValue: boolean = true

  verifyLicensePlate() {
    if (this.inputValue) {
      const kt = new KentekenCheck(this.inputValue)
      const result = kt.formatLicense()

      if (result === 'XX-XX-XX') {
        this.isCorrectValue = false
      }
      else {
        this.isCorrectValue = true
      }

      // Debug result
      // console.log('Result:', result)
      // console.log('Match:', result === 'XX-XX-XX')
      // console.log('isCorrectValue', this.isCorrectValue)


    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
