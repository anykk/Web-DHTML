import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ExpiryDirective } from './shared/directives/expiry.directive';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { MainComponent } from './components/main/main.component';
import { AnyBankComponent } from './components/any-bank/any-bank.component';
import { PayComponent } from './components/pay/pay.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';
import { RequestPayComponent } from './components/request-pay/request-pay.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PublicComponent } from './components/public/public.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
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
    ExpiryDirective,
    LoginComponent,
    AdminComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
