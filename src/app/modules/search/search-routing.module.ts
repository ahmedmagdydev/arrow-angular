import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search.component';
import {QueryFormComponent} from './query-form/query-form.component';
import {QueryResultComponent} from './query-result/query-result.component';

const routes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'query', component: QueryFormComponent},
    {path: 'result', component: QueryResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
