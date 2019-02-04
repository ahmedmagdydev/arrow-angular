import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTreeLevelComponent } from './data-tree-level.component';

describe('DataTreeLevelComponent', () => {
  let component: DataTreeLevelComponent;
  let fixture: ComponentFixture<DataTreeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTreeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTreeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
