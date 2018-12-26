import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FabComponent} from './fab/fab.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {HeaderComponent} from './header/header.component';
import {LocalizationModule} from '../localization/localization.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, FabComponent],
  imports: [
    CommonModule, LocalizationModule, RouterModule
  ],
  exports: [HeaderComponent, SideMenuComponent, FabComponent]
})
export class LayoutModule { }
