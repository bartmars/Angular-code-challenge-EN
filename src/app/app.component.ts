import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  vehicleType = 'Auto'

  handleClick(value: string) {
    console.log(value)
    this.vehicleType = value
  }
}
