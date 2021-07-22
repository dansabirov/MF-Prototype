import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-switcher',
  templateUrl: './carousel-switcher.component.html',
})
export class CarouselSwitcherComponent {
  @Input() count: number | undefined;
  @Input() value: number | undefined;

  @Output() switchChange = new EventEmitter<number>();

  onBtnClicked(selected: number) {
    this.switchChange.emit(selected);
  }
}
