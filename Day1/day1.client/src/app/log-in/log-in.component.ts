import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  ngOnInit() {
  }

  constructor(private _ser: ServiceUrlService, private _router: Router) {

  }

  getLogIn(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.getLogIn(form).subscribe(() => {
      alert("Welcome in your home")
      this._router.navigate(["/Service"]);

    },
      (error) => {
        alert(error.error)
      }
    )  
  }

}
