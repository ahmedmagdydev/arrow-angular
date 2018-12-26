import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewCorrespondanceComponent} from './new-correspondance.component';
const routes: Routes = [
  {
    path: '',
    component: NewCorrespondanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCorrespondanceRoutingModule { }
