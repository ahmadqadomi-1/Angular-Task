import { Component } from '@angular/core';
import { ServiceUrlService } from '../URL/service-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  parameter: any;

  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getDetailsToSubService(this.parameter);
  }
  constructor(private _ser: ServiceUrlService, private _route: ActivatedRoute) { }

  SubDetails: any;

  getDetailsToSubService(id: any) {
    this._ser.getDetailsToSubService(id).subscribe((data) => {
      this.SubDetails = data
      console.log(this.SubDetails, "this.SubDetails")
    });
  }
}
