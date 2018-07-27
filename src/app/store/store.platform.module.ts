import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers } from './app.reducers';
import { effects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterSerializer } from './router/router.serializer';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: RouterStateSerializer, useClass: RouterSerializer }]
})
export class StorePlatformModule {}
