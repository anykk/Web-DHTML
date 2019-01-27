import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from 'src/app/shared/services/payment.service';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-own-bank',
  templateUrl: './own-bank.component.html',
  styleUrls: ['./own-bank.component.css']
})
export class OwnBankComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.paymentService.getPaymentFile(f.value)
      .subscribe(response => {
        if (response.ok) {
          const blob = new Blob([response.body], { type: 'text/plain;charset=utf-8' });
          saveAs(blob, `Платёжка-${Date.now().toLocaleString()}.txt`);
          f.resetForm();
        }
      });
  }
}
