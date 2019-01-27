import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-card-payments',
  templateUrl: './card-payments.component.html',
  styleUrls: ['./card-payments.component.css']
})
export class CardPaymentsComponent implements OnInit {

  cardPayments = [];

  constructor(private auth: AuthService, private paymentService: PaymentService) { }

  ngOnInit() {
  }

  getData() {
    this.paymentService.getCardPayments()
      .subscribe(response => {
        if (response.ok) {
          const arr = [];
          Object.keys(response.body).forEach(key =>
            arr.push(response.body[key]));

          if (arr.length !== this.cardPayments.length) {
            this.cardPayments = arr;
          }
        }
      }
    );
  }

  logOut() {
    this.auth.logoutUser();
  }

  changeSecure(id: number, i: number) {
    this.paymentService.changePaymentSecurity(id, this.cardPayments[i].secure)
      .subscribe(response => {
        if (response.ok) {
          this.cardPayments[i].secure = !this.cardPayments[i].secure;
        }
      });
  }
}
