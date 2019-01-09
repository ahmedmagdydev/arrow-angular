import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceTemplateComponent } from './correspondence-template.component';

describe('CorrespondenceTemplateComponent', () => {
  let component: CorrespondenceTemplateComponent;
  let fixture: ComponentFixture<CorrespondenceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondenceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
