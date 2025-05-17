import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component'
import { VehicleSubTypeComponent } from './vehicle-sub-type/vehicle-sub-type.component'
import { VehicleLicensePlateComponent } from './vehicle-license-plate/vehicle-license-plate.component'
import { VehiclePictureComponent } from './vehicle-picture/vehicle-picture.component'

import { LicensePlateDirective } from './license-plate.directive'

@NgModule({
  declarations: [
    AppComponent,
    VehicleTypeComponent,
    VehicleSubTypeComponent,
    VehicleLicensePlateComponent,
    VehiclePictureComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    ReactiveFormsModule,
    LicensePlateDirective
  ],
  exports: [
    LicensePlateDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
