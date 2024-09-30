import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  ngOnInit() {
    this.getServices()
  }
  constructor(private _ser: ServiceUrlService) {

  }

  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")
    } ) 
  }

}
