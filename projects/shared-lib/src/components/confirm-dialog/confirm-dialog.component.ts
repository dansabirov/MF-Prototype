import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  @Input() cancelBtnId!: string;
  @Input() cancelBtnName!: string;
  @Input() confirmBtnId!: string;
  @Input() confirmBtnName!: string;
  @Input() id!: string;
  @Input() showYesBtn: boolean = true;

  @Output() cancelClickBtn = new EventEmitter();
  @Output() confirmClickBtn = new EventEmitter();

  messages!: string[];
  rowKey: any;
  visible: boolean = false;

  cancel() {
    this.cancelClickBtn.emit(this.rowKey);
    this.hide();
  }

  confirm() {
    this.confirmClickBtn.emit(this.rowKey);
    this.hide();
  }

  hide() {
    this.visible = false;
  }

  show(rowKey: any, messages: string[]) {
    this.messages = messages;
    this.rowKey = rowKey;
    this.visible = true;
  }
}
