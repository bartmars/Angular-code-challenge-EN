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
          Validators.minLength(6),
        ]
      ]
    })
  }

  formatLicensePlate() {
    return this.vehicleLicensePlateForm.value.replace(/([A-Za-z]+)(\d+)|(\d+)([A-Za-z]+)/g, '$1$3-$2$4')
  }

  onSubmit() {
    this.error = null;
    this.vehicleData = null;

    if (this.vehicleLicensePlateForm.valid) {
      console.log("Form validation succeeded, processing..")
      const plate = new KentekenCheck(this.vehicleLicensePlateForm.value.licensePlate)
      this.vehicleData = plate.formatLicense();

      if (this.vehicleData === "XX-XX-XX") {
        // Returns an invalid license plate and unhides error message in form
        console.log("Invalid license plate:", this.vehicleData)
        this.error = true
      }
      else {
        // Returns a valid license plate
        console.log("Valid license plate:", this.vehicleData)
        this.error = null
      }
    }
    else {
      console.log("Form validation failed, try again.")
      this.error = true
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
