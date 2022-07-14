import { PopupComponent } from './../../popup/popup.component';
import { SelectComponent } from './../../select/select.component';
import { OutlineComponent } from './../../outline/outline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OutlineComponent,
    SelectComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OutlineComponent,
    SelectComponent,
    PopupComponent
  ]
})
export class ShareModule { }
