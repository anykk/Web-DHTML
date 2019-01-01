import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appExpiry]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ExpiryDirective, multi: true }]
})
export class ExpiryDirective implements Validator {

  validate(control: FormControl): ValidationErrors | null {
    if (control.pristine) {
      return null;
    }

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear() % 1000;
    const stringYear = currentYear.toString().padStart(2, '0');

    const message = {
      'appExpiry':  {
        'message': `The expiry must be a valid date: month between 01 and 12 and year from ${currentYear}`
      }
    };

    const [expiryMonth, expiryYear] = control.value.split('/').map(Number);
    const monthIsValid = 1 <= expiryMonth && expiryMonth <= 12;
    const yearIsValid = currentYear > 0;
    const isNotExpired =
      (currentMonth < expiryMonth && currentYear === expiryYear) || (currentYear < expiryYear);

    if (monthIsValid && yearIsValid && isNotExpired) {
      return null;
    }

    return message;
  }
}
