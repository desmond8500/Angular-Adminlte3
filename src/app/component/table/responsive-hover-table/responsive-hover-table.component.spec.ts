import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveHoverTableComponent } from './responsive-hover-table.component';

describe('ResponsiveHoverTableComponent', () => {
  let component: ResponsiveHoverTableComponent;
  let fixture: ComponentFixture<ResponsiveHoverTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveHoverTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveHoverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
