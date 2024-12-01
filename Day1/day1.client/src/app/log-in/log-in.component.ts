import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private _ser: ServiceUrlService, private _router: Router) { }

  getLogIn(data: any) {
    const email = data.email;

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key]);
    }

    this._ser.getLogIn(form).subscribe((response) => {
      alert('Welcome in your home');

      localStorage.setItem('isLoggedIn', 'true'); 

      this._ser['email'].next(response.email);

      if (email.includes('@admin.com')) {
        this._router.navigate(['/Dashboard']); 
      } else {
        this._router.navigate(['/Service']); 
      }
    },
      (error) => {
        alert(error.error); 
      });
  }
}
