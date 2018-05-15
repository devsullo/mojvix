import { PassRecoverFormComponent } from './../../components/pass-recover-form/pass-recover-form.component';
import { EmptyComponent } from './../../components/empty/empty.component';
import { JoinFormComponent } from './../../components/join-form/join-form.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { SeanceService } from './seance.service';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'seance/:slug',
        component: IndexComponent,
        children: [
          {
            path: '',
            component: EmptyComponent
          },
          {
            path: 'join',
            component: JoinFormComponent
          },
          {
            path: 'password-recover',
            component: PassRecoverFormComponent
          }
        ]
      }
    ]),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [PlayerComponent, IndexComponent],
  providers: [SeanceService]
})
export class SeanceModule {}
