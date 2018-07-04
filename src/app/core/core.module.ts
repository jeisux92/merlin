import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RedditService } from './services/reddit.service';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: []
  , providers: [
    RedditService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],

})
export class CoreModule { }
