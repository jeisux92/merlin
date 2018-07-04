import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'me-redit-comment',
  templateUrl: './redit-comment.component.html',
  styleUrls: ['./redit-comment.component.css']
})
export class ReditCommentComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
