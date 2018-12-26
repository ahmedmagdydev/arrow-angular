import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCorrespondanceComponent } from './new-correspondance.component';

describe('NewCorrespondanceComponent', () => {
  let component: NewCorrespondanceComponent;
  let fixture: ComponentFixture<NewCorrespondanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCorrespondanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCorrespondanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
