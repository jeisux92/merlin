import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditCommentComponent } from './redit-comment.component';

describe('ReditCommentComponent', () => {
  let component: ReditCommentComponent;
  let fixture: ComponentFixture<ReditCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReditCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
