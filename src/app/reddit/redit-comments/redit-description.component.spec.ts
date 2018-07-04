import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditDescriptionComponent } from './redit-description.component';

describe('ReditDescriptionComponent', () => {
  let component: ReditDescriptionComponent;
  let fixture: ComponentFixture<ReditDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReditDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
