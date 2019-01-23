import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppCustomPreloader} from './app-custom-preloader';
import { AuthGuard } from './services/authentication/auth.guard';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule'},
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule',
  // canActivate: [AuthGuard],
   data: { preload: true } },
  { path: 'corres', loadChildren: './modules/correspondence/correspondence.module#CorrespondenceModule'},
  { path: 'corres-new', loadChildren: './modules/correspondence/new-correspondance/new-correspondance.module#NewCorrespondanceModule'},
  { path: 'search', loadChildren: './modules/search/search.module#SearchModule'},
  { path: 'address-book', loadChildren: './modules/address-book/address-book.module#AddressBookModule'},
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  { path: 'settings', loadChildren: './modules/settings/settings.module#SettingsModule'},
  { path: 'substitution', loadChildren: './modules/substitution/substitution.module#SubstitutionModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : AppCustomPreloader, useHash: false })],
exports: [RouterModule],
  providers: [ AppCustomPreloader ],
})
export class AppRoutingModule { }
