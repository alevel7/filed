import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  private url = 'https://5c547779a659410014eeeb75.mockapi.io/api/v1/Users';

  constructor(private http: HttpClient) { }

  // function that makes a post request
  makePayment(data: User): Observable<any> {
    // make a post request
    return this.http.post(this.url, data);
  }
}
