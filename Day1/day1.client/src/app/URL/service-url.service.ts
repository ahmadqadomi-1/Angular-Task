import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUrlService {
  constructor(private http: HttpClient) { }

  email: BehaviorSubject<string> = new BehaviorSubject<string>("");
  emailadress = this.email.asObservable();


  staticData = "https://localhost:7101/api"

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Service/GetAllServices`);

  }

  getSubServices(id : any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/subService/GetsubServiceForOneService/${id}`)
  }

  getDetailsToSubService(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/subService/GetSubServicesById/${id}`)
  }

  getSubscriptionData(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/subscription`)
  }

  addUserSubscription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubs`, data)
  }

  CreateUser(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/User`, data)
  }

  getLogIn(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/User/login`, data)
  }

  getAddService(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/Service/AddNewService`, data)
  }
}
