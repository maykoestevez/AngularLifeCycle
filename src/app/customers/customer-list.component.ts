import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer-list',
    template: `
    <a routerLink='/home'>Go Back</a>
    <p>
    <input (change)="AddCustomer()" [(ngModel)]="newCustomer"/>
    </p>
    <h2>Lista de clientes</h2>
    <ul>
    <li *ngFor="let customer of customers">{{customer}}</li>
    </ul>
    `
})

export class CustomerListComponent implements OnInit {

    customers: Array<string>;
    newCustomer: string;
    constructor() {
    }

    ngOnInit() {
        this.customers = this.getList();
    }

    getList(): Array<string> {
        return ['Pedro', 'Ramon', 'Luis'];
    }
    AddCustomer() {
        this.customers.push(this.newCustomer);
    }

}
