import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { masks } from '../../shared/masks';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { CardPayment } from 'src/app/structures/card-payment';

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {

  cardMask = masks.cardNumber;
  expiryMask = masks.expiry;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const payment: CardPayment = f.value;
    this.paymentService.storeCardPayment(payment).subscribe(response => {
      if (response.ok) {
        f.resetForm();
      }
    });
  }
}
