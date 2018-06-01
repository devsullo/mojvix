import { LoggedInGuardService as LoggedInGuard } from './../../shared/guards/logged-in-guard.service';
import { LoggedOutGuardService as LoggedOutGuard } from './../../shared/guards/logged-out-guard.service';
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
import { PostBlurbComponent } from './post-blurb/post-blurb.component';
import { PostBlurbService } from './post-blurb/post-blurb.service';


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
            component: EmptyComponent,
            data: { scrollElement: '#seance-body-area' }
          },
          {
            path: 'join',
            component: JoinFormComponent,
            canActivate: [LoggedOutGuard]
          },
          {
            path: 'password-recover',
            component: PassRecoverFormComponent,
            canActivate: [LoggedOutGuard]
          },
          {
            path: 'post-blurb',
            component: PostBlurbComponent,
            canActivate: [LoggedInGuard]
          }
        ]
      }
    ]),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [PlayerComponent, IndexComponent, PostBlurbComponent],
  providers: [SeanceService, PostBlurbService]
})
export class SeanceModule {}
