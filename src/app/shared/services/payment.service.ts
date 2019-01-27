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

  getPayments() {
    return this.http.get('http://localhost:4300/requestPayment',
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  getCardPayments() {
    return this.http.get('http://localhost:4300/cardPayment',
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  changePaymentSecurity(id: number, secure: boolean) {
    return this.http.patch('http://localhost:4300/cardPayment' + `/${id}`, { secure },
    { observe: 'response', responseType: 'json', headers: this.headers });
  }

  getPaymentFile(formData) {
    return this.http.post('http://localhost:4300/getPaymentFile', formData,
      { observe: 'response', responseType: 'text', headers: this.headers });
  }
}
