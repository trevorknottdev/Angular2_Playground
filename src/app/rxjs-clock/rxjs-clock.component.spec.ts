import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsClockComponent } from './rxjs-clock.component';

describe('RxjsClockComponent', () => {
  let component: RxjsClockComponent;
  let fixture: ComponentFixture<RxjsClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
