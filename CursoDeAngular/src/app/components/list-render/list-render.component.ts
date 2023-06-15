import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Turca', race: 'Dog' },
    { name: 'Tom', race: 'Cat' },
    { name: 'Frida', race: 'Dog' },
    { name: 'Bob', race: 'Horse' },
  ];
}
