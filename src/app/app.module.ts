import { RouteService } from './shared/services/route.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StorePlatformModule } from './store/store.platform.module';
import { CoreModule } from './core.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'mojvix' }),
    StorePlatformModule,
    PagesModule,
    SidebarModule,
    CoreModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(routeService: RouteService) {
    routeService.monitorRoute();
  }
}
