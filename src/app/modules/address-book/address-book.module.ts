import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalizationModule} from '../shared/localization/localization.module';

import { AddressBookRoutingModule } from './address-book-routing.module';
import { AddressBookComponent } from './address-book.component';
import {AddressBookFilterComponent} from './address-book-filter/address-book-filter.component'
import {DataTreeModule} from '../shared/data-tree/data-tree.module';
import {MatTreeModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,MatProgressBarModule} from '@angular/material';

@NgModule({

  declarations: [AddressBookComponent, AddressBookFilterComponent],
  imports: [
    CommonModule, LocalizationModule,
    AddressBookRoutingModule,DataTreeModule,MatProgressBarModule,
    MatTreeModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule

  ]
})
export class AddressBookModule { }
