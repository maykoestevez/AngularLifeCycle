import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './cutomer-routing.module';
import { CustomerListComponent } from './customer-list.component';

@NgModule({
  imports: [
    CustomerRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
