import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'projects/core-lib/src/public-api';



@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    AuthLibModule,
  ],
  exports: [SharedLibComponent, OtherComponent]
})
export class SharedLibModule { }
