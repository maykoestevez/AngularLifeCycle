import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTestComponent } from './table-test/table-test.component';
import { MatTableModule } from '@angular/material/table';
import { TableTestRoutingModule } from './table-test-routing.module';
import { TestOnchangeComponent } from './test-on-change/test-on-change.component';



@NgModule({
  declarations: [TableTestComponent, TestOnchangeComponent],
  imports: [
    CommonModule,
    TableTestRoutingModule,
    MatTableModule,
  ]
})
export class TableTestModule { }
