import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalizationModule} from '../shared/localization/localization.module';

import { AddressBookRoutingModule } from './address-book-routing.module';
import { AddressBookComponent } from './address-book.component';

@NgModule({
  declarations: [AddressBookComponent],
  imports: [
    CommonModule, LocalizationModule,
    AddressBookRoutingModule
  ]
})
export class AddressBookModule { }
