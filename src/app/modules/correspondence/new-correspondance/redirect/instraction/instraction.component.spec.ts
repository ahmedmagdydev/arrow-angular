import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractionComponent } from './instraction.component';

describe('InstractionComponent', () => {
  let component: InstractionComponent;
  let fixture: ComponentFixture<InstractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
