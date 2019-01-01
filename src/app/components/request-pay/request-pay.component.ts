import { Component, OnInit } from '@angular/core';

import { masks } from '../../shared/masks';
import { Payment } from 'src/app/structures/payment';

@Component({
  selector: 'app-request-pay',
  templateUrl: './request-pay.component.html',
  styleUrls: ['./request-pay.component.css']
})
export class RequestPayComponent implements OnInit {

  phoneMask = masks.phoneNubmer;

  paymentInfo: Payment = {
    inn: undefined,
    bik: undefined,
    bankAccount: undefined,
    nds: undefined,
    sum: undefined,
    email: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.paymentInfo);
  }
}
