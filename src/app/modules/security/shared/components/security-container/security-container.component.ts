import { Component, OnInit } from '@angular/core';
import Pasarela from 'src/app/utils/Pasarela';

@Component({
  selector: 'app-security-container',
  templateUrl: './security-container.component.html',
  styleUrls: ['./security-container.component.css']
})
export class SecurityContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.venta();
  }

  venta() {
    Pasarela.sendPay(2500);
    Pasarela.listenPay(this.enviarToken);
  }

  enviarToken(token: string) {
    alert("Mi token es::: " + token)
  }

}
