import { Component } from '@angular/core';
import { AuthLibService } from 'projects/core-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService) {
    this.service.login('Max');
  }
}
