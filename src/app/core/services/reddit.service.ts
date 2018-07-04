import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getReddits() {
    return this.http.get(`${environment.urlReddit}/reddits.json`)
      .pipe(
        map((result: any) => result.data.children)
      );
  }

  getComments(id) {
    return this.http.get(`${environment.urlReddit}${id}comments.json`)
      .pipe(
        map((result: any) => result.data.children)
      );
  }
}