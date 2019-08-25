import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedbarComponent } from './stackedbar.component';

describe('StackedbarComponent', () => {
  let component: StackedbarComponent;
  let fixture: ComponentFixture<StackedbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
