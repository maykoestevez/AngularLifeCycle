import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnChangeComponent } from './test-on-change.component';

describe('TestOnChangeComponent', () => {
  let component: TestOnChangeComponent;
  let fixture: ComponentFixture<TestOnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
