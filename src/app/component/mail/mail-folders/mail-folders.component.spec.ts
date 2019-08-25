import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFoldersComponent } from './mail-folders.component';

describe('MailFoldersComponent', () => {
  let component: MailFoldersComponent;
  let fixture: ComponentFixture<MailFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
