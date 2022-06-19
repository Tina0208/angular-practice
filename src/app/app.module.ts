import { BoardComponent } from './board/board.component';
import { ItemService } from './item.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountBoardComponent } from './count-board/count-board.component';
import { CountSelectComponent } from './count-select/count-select.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';
import { DetailChartComponent } from './detail-chart/detail-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountBoardComponent,
    CountSelectComponent,
    Page2Component,
    BoardComponent,
    DetailComponent,
    DetailBoardComponent,
    DetailChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
