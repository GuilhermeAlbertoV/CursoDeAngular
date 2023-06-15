import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CursoDeAngular';
  userName: string = '';
  userLastName: string = 'Henrique';
  userAge: number = 22;
  userData = {
    email: 'Algumacoisa@gmail.com',
    role: 'ADM',
  };

  nome: string = String(document.getElementById('nome'));
  idade: number = Number(document.getElementById('idade'));

  constructor() {
    this.nomeRandom();
  }

  nomeRandom() {
    let nomeRan = Math.floor(Math.random() * 3);

    if (nomeRan == 0) {
      this.userAge = 25;
      return (this.userName = 'Paulo');
    }
    if (nomeRan == 1) {
      this.userLastName = 'Carlos';
      this.userAge = 14;
      return (this.userName = 'José');
    }
    if (nomeRan == 2) {
      this.userLastName = 'Beatriz';
      this.userAge = 30;
      return (this.userName = 'Amanda');
    } else {
      return console.error('Error:');
    }
  }
}
