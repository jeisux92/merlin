import { RedditModule } from './reddit.module';

describe('RedditModule', () => {
  let redditModule: RedditModule;

  beforeEach(() => {
    redditModule = new RedditModule();
  });

  it('should create an instance', () => {
    expect(redditModule).toBeTruthy();
  });
});
