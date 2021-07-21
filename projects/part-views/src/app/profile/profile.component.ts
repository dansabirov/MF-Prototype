import { Component, OnInit } from "@angular/core";
import { AuthLibService } from 'projects/core-lib/src/public-api';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private service: AuthLibService) {
    this.service.login('Dan');
  }

  ngOnInit(): void {}
}
