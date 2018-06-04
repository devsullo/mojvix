import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return next.handle(request);
  }
}
