import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEditGeneralComponent } from './projet-edit-general.component';

describe('ProjetEditGeneralComponent', () => {
  let component: ProjetEditGeneralComponent;
  let fixture: ComponentFixture<ProjetEditGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEditGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
