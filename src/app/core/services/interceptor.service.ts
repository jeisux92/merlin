import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpRequest, HttpSentEvent, HttpUserEvent, HttpResponse, HttpProgressEvent, HttpHeaderResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let loadingContainer: any = document.querySelector('.container-loading');
    loadingContainer.style.display = 'block';
    return next.handle(req).pipe(
      tap((x: any) => {
        if (x.status === 200) {
          loadingContainer.style.display = 'none';
        }
      }), finalize(() => {
        loadingContainer.style.display = 'none';
      }));
  }
}
