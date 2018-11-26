import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import {NgPipesModule} from 'ngx-pipes';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FabComponent } from './shared/fab/fab.component';
import { CorrespondanceComponent } from './correspondance/correspondance.component';
import { SlickModule } from 'ngx-slick';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'corres',      component: CorrespondanceComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    FabComponent,
    CorrespondanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgPipesModule,
    NgxPaginationModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
