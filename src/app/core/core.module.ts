import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RedditService } from './services/reddit.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: []
  , providers: [
    RedditService
  ]
})
export class CoreModule { }
