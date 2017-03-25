import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInjComponent } from './dep-inj.component';

describe('DepInjComponent', () => {
  let component: DepInjComponent;
  let fixture: ComponentFixture<DepInjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepInjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepInjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
