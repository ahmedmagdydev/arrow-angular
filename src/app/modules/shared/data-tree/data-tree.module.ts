import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTreeComponent } from './data-tree.component';
import {MatIconModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { DataTreeLevelComponent } from './data-tree-level/data-tree-level.component';

@NgModule({
  declarations: [DataTreeComponent, DataTreeLevelComponent],
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatCheckboxModule
  ],
    exports: [DataTreeComponent],
})
export class DataTreeModule { }
