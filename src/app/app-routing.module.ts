import { PopupComponent } from './popup/popup.component';
import { CardRenderComponent } from './card-render/card-render.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'index' , component: IndexComponent , canActivate: [AuthGuard]},
  { path: 'state', loadChildren: () => import('./state/state.module').then(m => m.StateModule),canActivate: [AuthGuard]},
  { path: 'hour', loadChildren: () => import('./hour/hour.module').then(m => m.HourModule),canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'card-render' , component: CardRenderComponent,canActivate: [AuthGuard]},
  { path: 'popup' , component: PopupComponent, canActivate: [AuthGuard]},
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
