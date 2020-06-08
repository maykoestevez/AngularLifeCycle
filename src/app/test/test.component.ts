import {
  Component, OnInit, AfterContentInit, OnDestroy, AfterViewInit,
  OnChanges, DoCheck, AfterViewChecked, AfterContentChecked, Input
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name;
  initialTime = 0;

  constructor() {
    // performe now source
    // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
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
    console.log(`${eventToChek} ${result} ms`);
    return result;
  }

}
