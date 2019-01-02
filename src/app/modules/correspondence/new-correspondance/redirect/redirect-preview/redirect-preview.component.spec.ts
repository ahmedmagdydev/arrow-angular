import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectPreviewComponent } from './redirect-preview.component';

describe('RedirectPreviewComponent', () => {
  let component: RedirectPreviewComponent;
  let fixture: ComponentFixture<RedirectPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
