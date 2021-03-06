import { ItemService } from './item.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountBoardComponent } from './count-board/count-board.component';
import { CountSelectComponent } from './count-select/count-select.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { DetailBoardComponent } from './detail-board/detail-board.component';
import { DetailChartComponent } from './detail-chart/detail-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { IndexComponent } from './index/index.component';
import {MatTableModule} from '@angular/material/table';
import { ToMingGoPipe } from './hour/to-ming-go.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { CardRenderComponent } from './card-render/card-render.component';
import { InputComponent } from './card-render/input/input.component';
import { KeyboardComponent } from './card-render/keyboard/keyboard.component';
import { ShareModule } from './share/share/share.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountBoardComponent,
    CountSelectComponent,
    DetailComponent,
    DetailBoardComponent,
    DetailChartComponent,
    IndexComponent,
    ToMingGoPipe,
    LoginComponent,
    CardRenderComponent,
    InputComponent,
    KeyboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  exports: [
    ShareModule
  ],
  providers: [ItemService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
