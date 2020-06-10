import { Component, OnInit, Input, AfterViewInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-test-onchange',
  templateUrl: './test-on-change.component.html',
})
export class TestOnchangeComponent implements OnInit, AfterViewInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;
  initialTime = 0;

  constructor() {
    this.initialTime = performance.now(); // take time in milisecond
   }

  ngOnChanges() {
    this.performTime('OnChange');
  }

  ngOnInit() {
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
    console.log(`table component  ${eventToChek} ${result} ms`);
    return result;
  }

}