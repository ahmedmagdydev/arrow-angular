import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareLetterComponent } from './prepare-letter.component';

describe('PrepareLetterComponent', () => {
  let component: PrepareLetterComponent;
  let fixture: ComponentFixture<PrepareLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
