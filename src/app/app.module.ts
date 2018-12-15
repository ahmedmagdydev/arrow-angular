import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { FabComponent } from './shared/fab/fab.component';



const appRoutes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'home',
    loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'corres',
    loadChildren: './modules/correspondence/correspondence.module#CorrespondenceModule' }  ,
  { path: 'new-corres', 
  loadChildren: './modules/new-correspondance/new-correspondance.module#NewCorrespondanceModule' }  
];

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
