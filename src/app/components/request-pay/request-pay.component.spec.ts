import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPayComponent } from './request-pay.component';

describe('RequestPayComponent', () => {
  let component: RequestPayComponent;
  let fixture: ComponentFixture<RequestPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
