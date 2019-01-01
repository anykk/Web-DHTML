import { Component, OnInit } from '@angular/core';
import { ClientInfo } from 'src/app/structures/client-info';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  client: ClientInfo;

  constructor() { }

  ngOnInit() {
    // in production it may got from backend after auth
    this.client = {
      name: 'Мария',
      surname: 'Швецова',
      patronymic: 'Валерьевна',
      phone: '+79193977777',
      site: 'www.mary.com',
      email: 'mary@tochka.com'
    };
  }
}

