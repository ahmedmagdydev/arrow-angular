import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookFilterComponent } from './address-book-filter.component';

describe('AddressBookFilterComponent', () => {
  let component: AddressBookFilterComponent;
  let fixture: ComponentFixture<AddressBookFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
