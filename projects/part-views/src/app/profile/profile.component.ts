import { Component, OnInit, ViewChild } from "@angular/core";
import { ConfirmDialogComponent } from "@shared/components/confirm-dialog/confirm-dialog.component";
import { AuthLibService } from 'core-lib';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  @ViewChild(ConfirmDialogComponent, {static: true}) c!: ConfirmDialogComponent;
  
  constructor(private service: AuthLibService) {
    this.service.login('Dan');
  }

  ngOnInit(): void {
    this.c.show({}, ['Hey']);
  }
}
