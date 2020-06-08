import {Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewChecked, OnDestroy} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit, AfterViewInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  initialTime = 0;

  constructor() {
    this.initialTime = performance.now(); // take time in milisecond

   }

  ngOnChanges() {
    this.performTime('OnChange');
  }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
    this.performTime('OnInit');

  }
  ngDoCheck() {
    this.performTime('DoCheck');
  }

  ngAfterContentInit() {
    this.performTime('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.performTime('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.performTime('AfterInit');
  }

  ngAfterViewChecked() {
    this.performTime('AfterViewChecked');
  }

  ngAfterContentCheck() {
    this.performTime('AfterContentCheck');
  }

  ngOnDestroy() {
    this.performTime('OnDestroy');
  }

  private performTime(eventToChek: string): number {
    const perfome = performance.now();
    const result = perfome - this.initialTime;
    console.log(`${eventToChek} ${result} ms`);
    return result;
  }

}
