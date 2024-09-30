import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceUrlService } from "../URL/service-url.service";


@Component({
    selector: 'app-sub-service',
    templateUrl: './sub-service.component.html',
    styleUrl: './sub-service.component.css'
})
export class SubServiceComponent {
    parameter: any;

    ngOnInit() {
        this.parameter = this._route.snapshot.paramMap.get("id");
        this.getSubServices(this.parameter);
  }
  //ServiceUrlService

  constructor(private _ser: ServiceUrlService, private _route: ActivatedRoute) { }


    SubData: any;

    getSubServices(id: any) {
      this._ser.getSubServices(id).subscribe((data) => {
          debugger
            this.SubData = data;
            console.log(this.SubData, "this.SubData");
        });
    }
}
