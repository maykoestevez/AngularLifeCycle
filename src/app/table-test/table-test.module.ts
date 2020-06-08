import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTestComponent } from './table-test/table-test.component';
import { MatTableModule } from '@angular/material/table';
import { TableTestRoutingModule } from './table-test-routing.module';


@NgModule({
  declarations: [TableTestComponent],
  imports: [
    CommonModule,
    TableTestRoutingModule,
    MatTableModule,
  ]
})
export class TableTestModule { }
