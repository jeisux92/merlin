import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditCardComponent } from './sub-reddit-card.component';

describe('SubRedditCardComponent', () => {
  let component: SubRedditCardComponent;
  let fixture: ComponentFixture<SubRedditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
