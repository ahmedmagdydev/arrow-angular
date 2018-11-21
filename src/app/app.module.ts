import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import {NgPipesModule} from 'ngx-pipes';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'test',      component: HeaderComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
