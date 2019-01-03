import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrespondanceComponent } from './correspondance.component';
import { CorrespondenceRoutingModule } from './correspondence-routing.module';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {LocalizationModule} from '../shared/localization/localization.module';
import {CoresspondenceService} from '../../services/coresspondence/coresspondence.service';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [CorrespondanceComponent],
  imports: [CommonModule, CorrespondenceRoutingModule, DataTableModule, LocalizationModule,MatMenuModule],
  providers: [CoresspondenceService]
})
export class CorrespondenceModule { }
