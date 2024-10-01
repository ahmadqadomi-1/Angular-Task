import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  ngOnInit() {
  }

  constructor(private _ser: ServiceUrlService) {

  }
  
  CreateUser(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.CreateUser(form).subscribe(() => {
      alert("Bravo")
    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
