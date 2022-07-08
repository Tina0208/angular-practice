import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'index' , component: IndexComponent},
  { path: 'state', loadChildren: () => import('./state/state.module').then(m => m.StateModule) },
  { path: 'hour', loadChildren: () => import('./hour/hour.module').then(m => m.HourModule) },
  { path: 'login', component: LoginComponent},
  {
    path: '**',
    redirectTo: '/index',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
