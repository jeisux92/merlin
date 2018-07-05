import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReditDescriptionComponent } from './redit-description.component';
import { RouterModule } from '@angular/router';
import { RedditService } from '../../core/services/reddit.service';
import { SubRedditsComponent } from '../sub-reddits/sub-reddits.component';
import { RedditModule } from '../reddit.module';
import { ReditCommentComponent } from '../redit-comment/redit-comment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


describe('ReditDescriptionComponent', () => {
  let component: ReditDescriptionComponent;
  let fixture: ComponentFixture<ReditDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReditDescriptionComponent,
        ReditCommentComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        SharedModule
      ],
      providers: [
        RedditService
      ]
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
