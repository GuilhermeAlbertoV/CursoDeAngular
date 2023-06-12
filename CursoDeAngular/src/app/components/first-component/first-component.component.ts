import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Guilherme';
  age: number = 15;
  job: string = 'programador';
  hobbies = ['Jogar, Estudar, assistir '];
  car = {
    name: 'Mercedes',
    year: 2000,
  };
}
