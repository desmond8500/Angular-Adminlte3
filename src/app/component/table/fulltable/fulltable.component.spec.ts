import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltableComponent } from './fulltable.component';

describe('FulltableComponent', () => {
  let component: FulltableComponent;
  let fixture: ComponentFixture<FulltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
