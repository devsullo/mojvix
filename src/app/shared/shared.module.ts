import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  imports: [CommonModule],
  declarations: [EscapeHtmlPipe, TransPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EscapeHtmlPipe,
    TransPipe,
    PasswordStrengthBarModule,
    YoutubePlayerModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class SharedModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: environment.graphqlUrl
      }), cache: new InMemoryCache() });
  }
}
