import { RouteService } from './shared/services/route.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { StorePlatformModule } from './store/store.platform.module';
import { CoreModule } from './core.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { store, IAppState } from './store';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'mojvix' }),
    StorePlatformModule,
    PagesModule,
    SidebarModule,
    CoreModule,
    ComponentsModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, routeService: RouteService) {
    ngRedux.provideStore(store);
    routeService.monitorRoute();
  }
}
