import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrespondanceComponent } from './correspondance.component';

const routes: Routes = [
     {path: '', component: CorrespondanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondenceRoutingModule { }
