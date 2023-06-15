import { Component } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', race: 'Dog', age: 7 },
    { name: 'Tom', race: 'Cat', age: 2 },
    { name: 'Frida', race: 'Dog', age: 5 },
    { name: 'Bob', race: 'Horse', age: 4 },
  ];

  animal: Animal = {
    name: 'teste',
    race: 'Algumacoisa',
    age: 10,
  };

  descricao: string = 'Descrição do pet, clique para mais detalhes';

  showAge(animal: Animal) {
    this.descricao = `O pet ${animal.name}, tem ${animal.age} anos! `;
  }
}
