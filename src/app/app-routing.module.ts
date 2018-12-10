import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './components/pay/pay.component';
import { RequestPayComponent } from './components/request-pay/request-pay.component';
import { AnyBankComponent } from './components/any-bank/any-bank.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pay' },
  {
    path: 'pay',
    component: PayComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'any-bank' },
      { path: 'any-bank', component: AnyBankComponent },
      { path: 'own-bank', component: OwnBankComponent }
    ]
  },
  { path: 'request-pay', component: RequestPayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
