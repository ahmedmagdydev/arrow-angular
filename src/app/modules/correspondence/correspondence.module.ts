import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrespondanceComponent } from './correspondance/correspondance.component';
import { CorrespondenceRoutingModule } from './correspondence-routing.module';
import {sharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [CorrespondanceComponent],
  imports: [
    CommonModule,
    CorrespondenceRoutingModule,
    sharedModule
  ]
})
export class CorrespondenceModule { }
