import { Component, OnInit } from '@angular/core'
import { KentekenCheck } from 'rdw-kenteken-check'

@Component({
    selector: 'app-vehicle-license-plate',
    templateUrl: './vehicle-license-plate.component.html',
    styleUrls: ['./vehicle-license-plate.component.css'],
    standalone: false,
})
export class VehicleLicensePlateComponent implements OnInit {
  inputValue: string = ''
  inputElm = document.getElementById('kenteken') as HTMLInputElement
  outputElm = document.getElementById('error') as HTMLDivElement

  verifyLicensePlate(): void {
    if (this.inputValue) {
      const kt = new KentekenCheck(this.inputValue, this.inputElm, this.outputElm, 'true')
      const result = kt.formatLicense()

      // Debug result
      console.log(result)

      // const hasClass = this.outputElm.classList.contains('hidden')

      if (result === 'XX-XX-XX') {
        console.log(this.outputElm)
        // this.outputElm.classList.add('hidden')
      }

    }
  }

  ngOnInit(): void {
  }

}
