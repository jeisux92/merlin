import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditCommentComponent } from './redit-comment.component';

describe('ReditCommentComponent', () => {
  let component: ReditCommentComponent;
  let fixture: ComponentFixture<ReditCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReditCommentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditCommentComponent);
    component = fixture.componentInstance;
    component.comment = {
      "kind": "t1",
      "data": {
        "subreddit_id": "t5_2qh1i",
        "approved_at_utc": null,
        "edited": false,
        "mod_reason_by": null,
        "banned_by": null,
        "author_flair_type": "text",
        "removal_reason": null,
        "link_id": "t3_8w7fh7",
        "author_flair_template_id": null,
        "likes": null,
        "replies": "",
        "user_reports": [],
        "saved": false,
        "id": "e1tdym5",
        "banned_at_utc": null,
        "mod_reason_title": null,
        "gilded": 0,
        "archived": false,
        "report_reasons": null,
        "author": "decadrachma",
        "num_comments": 45,
        "can_mod_post": false,
        "send_replies": true,
        "parent_id": "t1_e1tbz37",
        "score": 1,
        "approved_by": null,
        "over_18": false,
        "mod_note": null,
        "collapsed": false,
        "body": "The show is amazing, but does decline a bit in later seasons.",
        "link_title": "What is the single best standalone episode of a TV show you've ever seen?",
        "author_flair_css_class": null,
        "name": "t1_e1tdym5",
        "downs": 0,
        "author_flair_richtext": [],
        "is_submitter": false,
        "collapsed_reason": null,
        "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;The show is amazing, but does decline a bit in later seasons.&lt;/p&gt;\n&lt;/div&gt;",
        "distinguished": null,
        "stickied": false,
        "can_gild": true,
        "subreddit": "AskReddit",
        "author_flair_text_color": null,
        "score_hidden": true,
        "permalink": "/r/AskReddit/comments/8w7fh7/what_is_the_single_best_standalone_episode_of_a/e1tdym5/",
        "num_reports": null,
        "link_permalink": "https://www.reddit.com/r/AskReddit/comments/8w7fh7/what_is_the_single_best_standalone_episode_of_a/",
        "no_follow": true,
        "link_author": "Brilliant-Badger",
        "author_flair_text": null,
        "link_url": "https://www.reddit.com/r/AskReddit/comments/8w7fh7/what_is_the_single_best_standalone_episode_of_a/",
        "created": 1530794510.0,
        "created_utc": 1530765710.0,
        "subreddit_name_prefixed": "r/AskReddit",
        "controversiality": 0,
        "author_flair_background_color": null,
        "rte_mode": "markdown",
        "mod_reports": [],
        "quarantine": false,
        "subreddit_type": "public",
        "ups": 1
      }
    };


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
