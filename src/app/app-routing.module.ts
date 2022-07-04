import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'index' , component: IndexComponent},
  { path: 'status' , component: StatusComponent},
  { path: '**' , redirectTo: '/index'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
