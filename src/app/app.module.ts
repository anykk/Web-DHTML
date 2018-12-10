import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CardModule} from 'ngx-card/ngx-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { MainComponent } from './components/main/main.component';
import { AnyBankComponent } from './components/any-bank/any-bank.component';
import { PayComponent } from './components/pay/pay.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';
import { RequestPayComponent } from './components/request-pay/request-pay.component';

// body: Geometria,Arial,sans-serif h: Anglecia,Arial,sans-serif

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    MainComponent,
    AnyBankComponent,
    PayComponent,
    OwnBankComponent,
    RequestPayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export interface ClientInfo {
  type: string;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  page: string;
  email: string;
}
