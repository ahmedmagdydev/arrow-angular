import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TableComponent} from './table/table.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgPipesModule} from 'ngx-pipes';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [ TableComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgPipesModule,
    FormsModule
  ],
  exports:[
  TableComponent,
  SlickModule
  ]
})
export class sharedModule { }
