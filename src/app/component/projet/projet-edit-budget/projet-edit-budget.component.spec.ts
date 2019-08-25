import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEditBudgetComponent } from './projet-edit-budget.component';

describe('ProjetEditBudgetComponent', () => {
  let component: ProjetEditBudgetComponent;
  let fixture: ComponentFixture<ProjetEditBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEditBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEditBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
