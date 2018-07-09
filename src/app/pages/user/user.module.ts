import { LoggedInGuardService as LoggedInGuard } from './../../shared/guards/logged-in-guard.service';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'user',
        component: IndexComponent,
        children: [
          {
            path: '',
            component: ProfileComponent,
            canActivate: [LoggedInGuard]
          },
          {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [LoggedInGuard]
          }
        ]
      }
    ])
  ],
  declarations: [ProfileComponent, IndexComponent]
})
export class UserModule {}
