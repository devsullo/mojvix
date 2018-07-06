import { Helper } from './helper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoggedInGuardService } from './guards/logged-in-guard.service';
import { LoggedOutGuardService } from './guards/logged-out-guard.service';
import { TokenInterceptor } from './interceptors';
import { ApolloClientModule } from './apollo-client.module';
import { OrderModule } from 'ngx-order-pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

const tokenGetter = () => {
  return localStorage.getItem('token');
};

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    ApolloClientModule
  ],
  declarations: [EscapeHtmlPipe, TransPipe, TimeAgoPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EscapeHtmlPipe,
    TransPipe,
    PasswordStrengthBarModule,
    YoutubePlayerModule,
    HttpClientModule,
    OrderModule,
    TimeAgoPipe
  ],
  providers: [
    AuthService,
    LoggedInGuardService,
    LoggedOutGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    Helper
  ]
})
export class SharedModule {
  constructor() {}
}



