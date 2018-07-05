import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RedditService } from './reddit.service';
import { HttpClientModule } from '@angular/common/http';


describe('RedditService', () => {
  let injector: TestBed;
  let service: RedditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        RedditService
      ],

    });
    injector = getTestBed();
    service = injector.get(RedditService);
  });

  it('should return all subreddits', async(() => {
    service.getReddits().subscribe((reddits: any[]) => {
      expect(reddits.length).toBeGreaterThan(0);
    });
  }));

  it('should return all comments by reddit', async(() => {
    const subRedditUrl: any = '/r/AskReddit/';
    service.getComments(subRedditUrl).subscribe((reddits: any[]) => {
      expect(reddits.length).toBeGreaterThan(0);
    });
  }));
});
