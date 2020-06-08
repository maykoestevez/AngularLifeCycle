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
  onChangeTime: number;
  onInitTime: number;
  onDoCheckTime: number;
  AfterContentInitTime: number;
  afterContentCheckedTime: number;
  afterViewInitTime: number;
  afterContentCheckTime: number;
  destroyTime: number;
  afterViewCheckedTime: number;

  constructor() {
    this.initialTime = performance.now();
  }

  ngOnChanges() {
    const onChange = this.performTime('OnChange');
    this.onChangeTime = onChange;
  }

  ngOnInit() {
    const onInit = this.performTime('OnInit');
    this.onInitTime = onInit;
  }
  ngDoCheck() {
    const onDoCheck = this.performTime('DoCheck');
    this.onDoCheckTime = onDoCheck;
  }

  ngAfterContentInit() {
    const afterContentInit = this.performTime('AfterContentInit');
    this.AfterContentInitTime = afterContentInit;
  }
  ngAfterContentChecked() {
    const afterContentChecked = this.performTime('AfterContentChecked');
    this.afterContentCheckedTime = afterContentChecked;
  }

  ngAfterViewInit() {
    const afterViewInit = this.performTime('AfterInit');
    this.afterViewInitTime = afterViewInit;
  }
  ngAfterViewChecked() {
    const afterViewChecked = this.performTime('AfterViewChecked');
    this.afterViewCheckedTime = afterViewChecked;
  }

  ngAfterContentCheck() {
    const afterContentCheck = this.performTime('AfterContentCheck');
    this.afterContentCheckTime = afterContentCheck;
  }

  ngOnDestroy() {
    const destroy = this.performTime('OnDestroy');
    this.destroyTime = destroy;

  }

  private performTime(eventToChek: string): number {
    const perfome = performance.now();
    const result = perfome - this.initialTime;
    console.log(`${eventToChek} ${result} ms`);
    return result;
  }

}
