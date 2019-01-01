import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { masks } from '../../shared/masks';
import { CardPayment } from 'src/app/structures/card-payment';

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {

  cardMask = masks.cardNumber;
  expiryMask = masks.expiry;

  constructor() {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    // this._paymentService.pay(this.paymentModel)
    //   .subscribe(
    //     console.log,
    //     console.error
    //   );
  }
}
