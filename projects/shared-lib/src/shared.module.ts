import { NgModule } from '@angular/core';
import { GridLayoutComponent } from '@shared/components/grid-layout/grid-layout.component';
import { CarouselSwitcherComponent } from '@shared/components/carousel-switcher/carousel-switcher.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    CarouselSwitcherComponent,
    ConfirmDialogComponent,
    GridLayoutComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule,
    DxPopupModule,

  ],
  exports: [
    CarouselSwitcherComponent,
    ConfirmDialogComponent,
    GridLayoutComponent,
  ]
})
export class SharedModule { }
