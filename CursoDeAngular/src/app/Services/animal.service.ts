import { Injectable } from '@angular/core';
import { Animal } from '../Interfaces/Animal';
@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}
  remove(animais: Animal[], animal: Animal) {
    return animais.filter((a) => animal.name !== a.name);
  }

  Cat(animals: Animal[], animal: Animal) {
    return animals.filter((a) => 'Cat' === a.race);
  }
}
