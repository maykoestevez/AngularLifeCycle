import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTestComponent } from './table-test/table-test.component';


const routes: Routes = [
  { path: '', redirectTo: 'table-test', pathMatch: 'full' },
  { path: 'table-test', component: TableTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTestRoutingModule { }
