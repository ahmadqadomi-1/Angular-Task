import { Component } from '@angular/core';
import { ServiceUrlService } from '../../URL/service-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  ngOnInit() {
  }

  constructor(private _ser: ServiceUrlService, private _router: Router) {

  }

  image: any
  changeImage(event: any) {
    this.image = event.target.files[0] 
  }


  addNewService(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    form.append("ServiceImage",this.image)
    this._ser.getAddService(data).subscribe(() => {
      alert("Well Done")
    },
      (error) => {
        alert(error.error)
      }
    )  
  }
}
