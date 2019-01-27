import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-payment-requests',
  templateUrl: './payment-requests.component.html',
  styleUrls: ['./payment-requests.component.css']
})
export class PaymentRequestsComponent implements OnInit {

  paymentRequests = [];

  constructor(private auth: AuthService, private paymentService: PaymentService) { }

  ngOnInit() {
  }

  getData() {
    this.paymentService.getPayments()
      .subscribe(response => {
        const arr = [];
        Object.keys(response.body).forEach(key =>
          arr.push(response.body[key]));

        if (arr.length !== this.paymentRequests.length) {
          this.paymentRequests = arr;
        }
      }
    );
  }

  logOut() {
    this.auth.logoutUser();
  }
}
