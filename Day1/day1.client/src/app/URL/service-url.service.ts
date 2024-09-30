import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUrlService {
  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7101/api"

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Service/GetAllServices`);

  }

  getSubServices(id : any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/subService/GetsubServiceForOneService/${id}`)
  }

}