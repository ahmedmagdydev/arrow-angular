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
import { TableComponent } from './shared/table/table.component';
import { NewCorrespondanceComponent } from './new-correspondance/new-correspondance.component';
import { MainInfoComponent } from './new-correspondance/main-info/main-info.component';
import { AttachmentsComponent } from './new-correspondance/attachments/attachments.component';
import { TasksComponent } from './new-correspondance/tasks/tasks.component';
import { RelatedComponent } from './new-correspondance/related/related.component';
import { HistoryComponent } from './new-correspondance/history/history.component';
import { RedirectComponent } from './new-correspondance/redirect/redirect.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'corres',      component: CorrespondanceComponent }  ,
  { path: 'new-corres',      component: NewCorrespondanceComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    FabComponent,
    CorrespondanceComponent,
    TableComponent,
    NewCorrespondanceComponent,
    MainInfoComponent,
    AttachmentsComponent,
    TasksComponent,
    RelatedComponent,
    HistoryComponent,
    RedirectComponent
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
