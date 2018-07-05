import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRedditsComponent } from './sub-reddits/sub-reddits.component';
import { Routes, RouterModule } from '@angular/router';
import { SubRedditCardComponent } from './sub-reddit-card/sub-reddit-card.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ReditDescriptionComponent } from './redit-comments/redit-description.component';
import { ReditCommentComponent } from './redit-comment/redit-comment.component';

const routes: Routes = [
  { path: '', component: SubRedditsComponent },
  { path: 'reddit/:id', component: ReditDescriptionComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SubRedditsComponent,
    SubRedditCardComponent,
    ReditDescriptionComponent,
    ReditCommentComponent
  ]
})
export class RedditModule { }
