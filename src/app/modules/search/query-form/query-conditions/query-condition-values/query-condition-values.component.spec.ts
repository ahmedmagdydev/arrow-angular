import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryContitionValuesComponent } from './query-contition-values.component';

describe('QueryContitionValuesComponent', () => {
  let component: QueryContitionValuesComponent;
  let fixture: ComponentFixture<QueryContitionValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryContitionValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryContitionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
