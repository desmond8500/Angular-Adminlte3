import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceComponent } from './agence.component';

describe('AgenceComponent', () => {
  let component: AgenceComponent;
  let fixture: ComponentFixture<AgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
