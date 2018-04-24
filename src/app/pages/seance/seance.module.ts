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
import { SeanceComponent } from './seance/seance.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'seance/:slug',
        component: SeanceComponent
      },
      {
        path: 'seance/:slug/join',
        component: SeanceComponent,
        children: [
          {
            path: '',
            component: JoinFormComponent,
            outlet: 'seance-body'
          }
        ]
      }
    ]),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [PlayerComponent, SeanceComponent],
  providers: [SeanceService]
})
export class SeanceModule {}
