import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Socialwidget2Component } from './socialwidget2.component';

describe('Socialwidget2Component', () => {
  let component: Socialwidget2Component;
  let fixture: ComponentFixture<Socialwidget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Socialwidget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Socialwidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
