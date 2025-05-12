import { Component, OnInit } from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';

@Component({
    selector: 'app-vehicle-license-plate',
    templateUrl: './vehicle-license-plate.component.html',
    styleUrls: ['./vehicle-license-plate.component.css'],
    standalone: false
})
export class VehicleLicensePlateComponent implements OnInit {
  
  // Does not work
  // Error: src/app/vehicle-license-plate/vehicle-license-plate.component.ts:19:51 - error TS2345: Argument of type 'HTMLElement' is not assignable to parameter of type 'HTMLInputElement'.
  // Type 'HTMLElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, autocomplete, and 52 more.
  // kenteken: string = '45-HNT-1'
  // message: string = ''

  // inputElm: HTMLElement = document.getElementById('input-kenteken')
  // outputElm: HTMLElement|null = document.getElementById('output-kenteken')


  // constructor() {
  //   try {
  //     const kt = new KentekenCheck(this.kenteken, this.inputElm, this.outputElm)
  //     kt.formatLicense()
  //     kt.bindInputListener()
  //   }
  //   catch (e) {


  //     console.log(e)
  //   }
  // }

  ngOnInit(): void {
  }

}
