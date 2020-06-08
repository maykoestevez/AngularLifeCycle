import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output,
  OnInit, AfterViewInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import {Subject} from 'rxjs';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit, AfterViewInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  destroy$ = new Subject();
  answeredCorrectly: boolean;

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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.performTime('OnDestroy');

  }

  private performTime(eventToChek: string): number {
    const perfome = performance.now();
    const result = perfome - this.initialTime;
    console.log(`${eventToChek} ${result} ms`);
    return result;
  }

}