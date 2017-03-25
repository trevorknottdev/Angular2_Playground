import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
