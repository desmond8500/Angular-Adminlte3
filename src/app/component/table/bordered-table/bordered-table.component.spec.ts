import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedTableComponent } from './bordered-table.component';

describe('BorderedTableComponent', () => {
  let component: BorderedTableComponent;
  let fixture: ComponentFixture<BorderedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
