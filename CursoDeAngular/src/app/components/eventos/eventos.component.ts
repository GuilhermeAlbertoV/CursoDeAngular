import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  show: boolean = false;
  secret: boolean = false;
  constructor() {}

  showMessage(): void {
    this.show = !this.show; // função toggle que serve para alterar o valor de true vai pra false e vice-versa
    this.secret = false;
  } // mesma coisa de usar o if só que gasta menos linhas :D

  easterEgg(): void {
    this.secret = !this.secret;
  }
}
