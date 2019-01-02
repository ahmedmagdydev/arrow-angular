import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTreeComponent } from './visual-tree.component';

describe('VisualTreeComponent', () => {
  let component: VisualTreeComponent;
  let fixture: ComponentFixture<VisualTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
