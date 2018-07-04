import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../core/services/reddit.service';

@Component({
  selector: 'me-redit-comments',
  templateUrl: './redit-description.component.html',
  styleUrls: ['./redit-description.component.css']
})
export class ReditCommentsComponent implements OnInit {
  comments = [];
  constructor(private route: ActivatedRoute, private redditService: RedditService) { }

  ngOnInit() {
    this.route.params.subscribe((x: any) => {
      this.redditService.getComments(x['id']).subscribe((r: any) => {
        this.comments = r;
      });
    });
  }

}
