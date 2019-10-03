import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetupComponent } from './tab-setup.component';

describe('TabSetupComponent', () => {
  let component: TabSetupComponent;
  let fixture: ComponentFixture<TabSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
