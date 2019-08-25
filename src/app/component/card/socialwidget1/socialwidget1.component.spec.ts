import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Socialwidget1Component } from './socialwidget1.component';

describe('Socialwidget1Component', () => {
  let component: Socialwidget1Component;
  let fixture: ComponentFixture<Socialwidget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Socialwidget1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Socialwidget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
