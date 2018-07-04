import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReditCommentsComponent } from './redit-description.component';


describe('ReditDescriptionComponent', () => {
  let component: ReditCommentsComponent;
  let fixture: ComponentFixture<ReditCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReditCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
