import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubstitutionComponent} from './substitution.component';

const routes: Routes = [
    {path: '', component: SubstitutionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubstitutionRoutingModule { }
