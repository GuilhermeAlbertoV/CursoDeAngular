import { Component } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';
import { AnimalService } from 'src/app/Services/animal.service';

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
  constructor(private animalService: AnimalService) {}

  animal: Animal = {
    name: 'teste',
    race: 'Algumacoisa',
    age: 10,
  };

  descricao: string = 'Descrição do pet, clique para mais detalhes';

  showAge(animal: Animal) {
    this.descricao = `O pet ${animal.name}, tem ${animal.age} anos! `;
  }

  JustCat(animal: Animal) {
    this.animals = this.animalService.Cat(this.animals, animal);
  }

  removeAnimal(animal: Animal) {
    console.log('Animal Excluído');
    this.animals = this.animalService.remove(this.animals, animal);
  }
}
