import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvancedModeComponent } from './search-advanced-mode.component';

describe('SearchAdvancedModeComponent', () => {
  let component: SearchAdvancedModeComponent;
  let fixture: ComponentFixture<SearchAdvancedModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvancedModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvancedModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
