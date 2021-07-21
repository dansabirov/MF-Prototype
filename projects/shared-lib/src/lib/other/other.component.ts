import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'projects/core-lib/src/public-api';

@Component({
  selector: 'lib-other',
  template: '<p>User: {{user}}</p>',
  // styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  user = this.service.user;
  constructor(private service: AuthLibService) { }

  ngOnInit(): void {
  }

}
