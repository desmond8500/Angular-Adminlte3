import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecardComponent } from './simplecard.component';

describe('SimplecardComponent', () => {
  let component: SimplecardComponent;
  let fixture: ComponentFixture<SimplecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
