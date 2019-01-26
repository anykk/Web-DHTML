import { Component, OnInit } from '@angular/core';

import { masks } from '../../shared/masks';
import { Payment } from 'src/app/structures/payment';
import { NgForm } from '@angular/forms';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-request-pay',
  templateUrl: './request-pay.component.html',
  styleUrls: ['./request-pay.component.css']
})
export class RequestPayComponent implements OnInit {

  phoneMask = masks.phoneNubmer;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const payment: Payment = f.value;
    this.paymentService.requestPayment(payment).subscribe(response => {
      if (response.ok) {
        f.resetForm();
      }
    });
  }
}
