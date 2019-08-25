import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Socialwidget3Component } from './socialwidget3.component';

describe('Socialwidget3Component', () => {
  let component: Socialwidget3Component;
  let fixture: ComponentFixture<Socialwidget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Socialwidget3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Socialwidget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
