import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEditFilesComponent } from './projet-edit-files.component';

describe('ProjetEditFilesComponent', () => {
  let component: ProjetEditFilesComponent;
  let fixture: ComponentFixture<ProjetEditFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEditFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEditFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
