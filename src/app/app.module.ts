import { SidebarModule } from './sidebar/sidebar.module';
import { SeanceModule } from './pages/seance/seance.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { TitlesModule } from './pages/titles/titles.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SeanceModule,
    BrowserModule.withServerTransition({ appId: 'mojvix' }),
    TitlesModule,
    SidebarModule,
    CoreModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
