import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMiscComponent } from './form-misc.component';

describe('FormMiscComponent', () => {
  let component: FormMiscComponent;
  let fixture: ComponentFixture<FormMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
