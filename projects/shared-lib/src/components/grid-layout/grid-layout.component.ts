import { Component, Input, OnInit } from '@angular/core';
import { classNames } from '@shared/functions';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
})
export class GridLayoutComponent implements OnInit {
  @Input()
  get className() {
    return this._className;
  }
  set className(value: string) {
    if (value !== this._className) {
      this._className = value;
      this.setGridClass();
    }
  }

  cols: 14 | 12 | 10 | 8 | 6;
  gridClass: string | undefined;

  private _className = '';

  constructor() {
    this.cols = 12;
  }

  ngOnInit() {
    this.setGridClass();
  }

  setGridClass() {
    this.gridClass = classNames('grid', 'grid-' + this.cols, this.className);
  }
}
