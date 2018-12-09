import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { FabComponent } from './shared/fab/fab.component';

import { NewCorrespondanceComponent } from './new-correspondance/new-correspondance.component';
import { MainInfoComponent } from './new-correspondance/main-info/main-info.component';
import { AttachmentsComponent } from './new-correspondance/attachments/attachments.component';
import { TasksComponent } from './new-correspondance/tasks/tasks.component';
import { RelatedComponent } from './new-correspondance/related/related.component';
import { HistoryComponent } from './new-correspondance/history/history.component';
import { RedirectComponent } from './new-correspondance/redirect/redirect.component';
import { PrepareLetterComponent } from './new-correspondance/prepare-letter/prepare-letter.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';

const appRoutes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'home',
    loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'corres',
    loadChildren: './modules/correspondence/correspondence.module#CorrespondenceModule' }  ,
  { path: 'new-corres',      component: NewCorrespondanceComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FabComponent,
    NewCorrespondanceComponent,
    MainInfoComponent,
    AttachmentsComponent,
    TasksComponent,
    RelatedComponent,
    HistoryComponent,
    RedirectComponent,
    PrepareLetterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
