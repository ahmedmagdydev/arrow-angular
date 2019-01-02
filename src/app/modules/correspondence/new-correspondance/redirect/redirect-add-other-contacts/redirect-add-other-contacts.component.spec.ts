import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAddOtherContactsComponent } from './redirect-add-other-contacts.component';

describe('RedirectAddOtherContactsComponent', () => {
  let component: RedirectAddOtherContactsComponent;
  let fixture: ComponentFixture<RedirectAddOtherContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectAddOtherContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectAddOtherContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
