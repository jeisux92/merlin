import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../core/services/reddit.service';

@Component({
  selector: 'me-sub-reddits',
  templateUrl: './sub-reddits.component.html',
  styleUrls: ['./sub-reddits.component.scss']
})
export class SubRedditsComponent implements OnInit {
  reddits: any;
  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getReddits().subscribe((reddits) => {
      this.reddits = reddits;
    });
  }

}
