import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayComponent } from './components/pay/pay.component';
import { RequestPayComponent } from './components/request-pay/request-pay.component';
import { AnyBankComponent } from './components/any-bank/any-bank.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PublicComponent } from './components/public/public.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'public' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'public', component: PublicComponent, canActivate: [AuthGuard], children: [
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
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
