import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';

// body: Geometria,Arial,sans-serif h: Anglecia,Arial,sans-serif

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
