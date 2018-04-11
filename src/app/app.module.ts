import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TitlesModule } from './pages/titles/titles.module';
import { BlurbsModule } from './sidebar/blurbs/blurbs.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TitlesModule,
    BlurbsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
