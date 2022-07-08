import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    MatTableModule
  ]
})
export class StateModule { }
