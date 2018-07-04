import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RedditService } from './reddit.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';


describe('RedditService', () => {
  let injector: TestBed;
  let service: RedditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RedditService],

    });
    injector = getTestBed();
    service = injector.get(RedditService);
  });

  it('Should return all subreddits', async(() => {
    service.getReddits().subscribe((reddits: any[]) => {
      expect(reddits.length).toBeGreaterThan(0);
    });
  }));

  it('Should return all comments by reddit', async(() => {
    let subRedditUrl:any = '/r/AskReddit/';
    service.getComments(subRedditUrl).subscribe((reddits: any[]) => {
      expect(reddits.length).toBeGreaterThan(0);
    });
  }))
});
