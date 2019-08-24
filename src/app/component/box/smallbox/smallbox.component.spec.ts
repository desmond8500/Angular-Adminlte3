import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallboxComponent } from './smallbox.component';

describe('SmallboxComponent', () => {
  let component: SmallboxComponent;
  let fixture: ComponentFixture<SmallboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
