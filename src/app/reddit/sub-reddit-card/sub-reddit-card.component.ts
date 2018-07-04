import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'me-sub-reddit-card',
  templateUrl: './sub-reddit-card.component.html',
  styleUrls: ['./sub-reddit-card.component.scss']
})
export class SubRedditCardComponent implements OnInit {
  @Input() reddit;
  constructor() { }

  ngOnInit() {
  }

}
