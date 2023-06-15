import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teste-usando-funcionalidades',
  templateUrl: './teste-usando-funcionalidades.component.html',
  styleUrls: ['./teste-usando-funcionalidades.component.css'],
})
export class TesteUsandoFuncionalidadesComponent {
  constructor() {}

  @Input() UserName: string = '';
  @Input() UserAge: number = 0;

  animals = [
    { name: 'Tom', race: 'Cat' },
    { name: 'Jerry', race: 'Mouse' },
  ];
}
