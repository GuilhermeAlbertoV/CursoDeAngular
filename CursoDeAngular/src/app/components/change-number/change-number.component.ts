import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  constructor() {
    this.handleClick();
  }

  @Input() num: number = 0;
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }
}
