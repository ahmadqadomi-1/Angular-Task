import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  ngOnInit() {
    this.getSubscriptionData();
  }
  constructor(private _ser: ServiceUrlService) { }

  SubscriptionArray: any //subscribe
  getSubscriptionData() {
    this._ser.getSubscriptionData().subscribe((data) => {
      this.SubscriptionArray = data;
      console.log(this.SubscriptionArray, "this.SubscriptionArray");
    });
  }

  data = {
    "subscriptionId": 0,
    "subServiceId": 1
  }

  addUserSubscription(id : any) {
    this.data.subscriptionId = id
    this._ser.addUserSubscription(this.data).subscribe(() => {
      alert("Done Dell")
    })
  }
}
