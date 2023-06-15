import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  constructor() {
    this.handleClick();
  }
  @Output() changeNumber: EventEmitter<number | string> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }
}
