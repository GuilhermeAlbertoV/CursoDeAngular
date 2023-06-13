import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    let valorini = Math.floor(Math.random() * 10);
    this.myNumber = valorini;
    console.log(`Valor alterado para ${this.myNumber}`);
  }

  onTeste() {
    console.log('Sus');
  }
}
