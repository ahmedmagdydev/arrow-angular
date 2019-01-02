import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualTreeComponent } from './visual-tree.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NodePreviewComponent } from './node-preview/node-preview.component';
import {MatButtonModule} from '@angular/material';
import { TreeLevelComponent } from './tree-level/tree-level.component';
import {LocalizationModule} from '../../localization/localization.module';

@NgModule({
  declarations: [VisualTreeComponent, NodePreviewComponent, TreeLevelComponent],
  imports: [
    CommonModule, DragDropModule, MatButtonModule, LocalizationModule
  ],
    exports: [VisualTreeComponent]
})
export class VisualTreeModule { }
