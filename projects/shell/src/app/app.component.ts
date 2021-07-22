import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { AuthLibService } from 'core-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ConfirmDialogComponent, {static: true}) c!: ConfirmDialogComponent;
  title = 'shell';

  constructor(private service: AuthLibService) {
    this.service.login('Max');
  }

  ngOnInit() {
    this.c.show({}, ['Hey']);
  }
}
