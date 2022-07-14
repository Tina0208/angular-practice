// import { SelectComponent } from '../select/select.component';
// import { OutlineComponent } from '../outline/outline.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourRoutingModule } from './hour-routing.module';
import { HourComponent } from './hour.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ShareModule } from '../share/share/share.module';


@NgModule({
  declarations: [
    HourComponent,
    // OutlineComponent,
    // SelectComponent
  ],
  imports: [
    CommonModule,
    HourRoutingModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ShareModule
  ],
  exports: [ShareModule]
})
export class HourModule { }
