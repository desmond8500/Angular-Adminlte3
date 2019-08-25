import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidedTabComponent } from './left-sided-tab.component';

describe('LeftSidedTabComponent', () => {
  let component: LeftSidedTabComponent;
  let fixture: ComponentFixture<LeftSidedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
