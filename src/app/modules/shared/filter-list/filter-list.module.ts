import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListComponent } from './filter-list.component';
import {LocalizationModule} from '../localization/localization.module';
import {SlickModule} from 'ngx-slick';

@NgModule({
  declarations: [FilterListComponent],
  imports: [
    CommonModule, LocalizationModule, SlickModule
  ],
    exports: [FilterListComponent]
})
export class FilterListModule { }
