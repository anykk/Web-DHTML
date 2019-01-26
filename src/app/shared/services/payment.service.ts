import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardPayment } from 'src/app/structures/card-payment';
import { Payment } from 'src/app/structures/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Request-Methods': 'GET,POST,PATCH'
  });

  constructor(private http: HttpClient) { }

  storeCardPayment(payment: CardPayment) {
    return this.http.post('http://localhost:4300/cardPayment', payment,
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  requestPayment(payment: Payment) {
    return this.http.post('http://localhost:4300/requestPayment', payment,
    { observe: 'response', responseType: 'json', headers: this.headers });
  }
}
