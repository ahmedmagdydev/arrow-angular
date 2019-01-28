import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryConditionsComponent } from './query-conditions.component';

describe('QueryConditionsComponent', () => {
  let component: QueryConditionsComponent;
  let fixture: ComponentFixture<QueryConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
