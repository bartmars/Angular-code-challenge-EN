import { Component, input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { KentekenCheck } from 'rdw-kenteken-check'

@Component({
    selector: 'app-vehicle-license-plate',
    templateUrl: './vehicle-license-plate.component.html',
    styleUrls: ['./vehicle-license-plate.component.css'],
    standalone: false,
})
export class VehicleLicensePlateComponent implements OnInit {
  vehicleLicensePlateForm: FormGroup
  vehicleData: any = null
  error: boolean | null = false
  valid: boolean | null = false
  debugForm: boolean | null = true

  constructor(private fb: FormBuilder) {
    this.vehicleLicensePlateForm = this.fb.group({
      licensePlate: [
        '', 
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z]{2}-\d{2}-[a-zA-Z]{2}$/),
          Validators.pattern(/^[a-zA-Z]{2}-\d{3}-[a-zA-Z]{1}$/),
          Validators.pattern(/^[a-zA-Z]{1}-\d{3}-[a-zA-Z]{2}$/),
        ]
      ]
    });
  }

  async onSubmit() {
    this.error = false;
    this.vehicleData = null;

    if (this.vehicleLicensePlateForm.valid) {
      const plate = new KentekenCheck(this.vehicleLicensePlateForm.value.licensePlate);

      this.vehicleData = await plate.formatLicense();
      if (this.vehicleData === 'XX-XX-XX') {
        this.error = true
      }
    }
    else {
      this.error = this.vehicleLicensePlateForm.valid
    }
  }


  ngOnInit(): void { }
}




// export class VehicleLicensePlateComponent implements OnInit {
//   inputValue: string = ''
//   result: string = ''
//   isCorrectValue: boolean = true

//   verifyLicensePlate() {
//     if (this.inputValue) {
//       const kt = new KentekenCheck(this.inputValue)
//       this.result = kt.formatLicense()

//       if (this.result === 'XX-XX-XX') {
//         this.isCorrectValue = false
//       }
//       else {
//         this.isCorrectValue = true
//       }
//     }
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
