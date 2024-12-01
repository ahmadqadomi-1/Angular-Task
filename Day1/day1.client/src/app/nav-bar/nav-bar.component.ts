import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUrlService } from '../URL/service-url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLoggedIn: boolean = false; // حالة تسجيل الدخول

  constructor(private _ser: ServiceUrlService) { }


  email = ""
  ngOnInit() {
    this._ser.emailadress.subscribe((data) => {
      this.email = data
    })



  }


}
