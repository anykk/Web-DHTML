import { Component, OnInit } from '@angular/core';
import { ClientInfo } from 'src/app/app.module';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  currentClient: ClientInfo;

  constructor() { }

  ngOnInit() {
    // in production it may got from backend after auth
    this.currentClient = {
      type: 'Индивидуальный предприниматель',
      name: 'Мария',
      surname: 'Швецова',
      patronymic: 'Валерьевна',
      phone: '+79193977777',
      page: 'www.mary.com',
      email: 'mary@tochka.com'
    };
  }
}

