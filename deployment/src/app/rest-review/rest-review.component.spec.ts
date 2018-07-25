import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestReviewComponent } from './rest-review.component';

describe('RestReviewComponent', () => {
  let component: RestReviewComponent;
  let fixture: ComponentFixture<RestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
