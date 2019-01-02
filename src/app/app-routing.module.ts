import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppCustomPreloader} from './app-custom-preloader';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule'},
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', data: { preload: true } },
  { path: 'corres', loadChildren: './modules/correspondence/correspondence.module#CorrespondenceModule'},
  { path: 'corres-new', loadChildren: './modules/correspondence/new-correspondance/new-correspondance.module#NewCorrespondanceModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : AppCustomPreloader, useHash: false })],
  exports: [RouterModule],
  providers: [ AppCustomPreloader ],
})
export class AppRoutingModule { }
