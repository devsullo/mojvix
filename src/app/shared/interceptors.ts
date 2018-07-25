import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: this.authService.getAuthorizationHeader()
    });
    return next.handle(request);
  }
}
