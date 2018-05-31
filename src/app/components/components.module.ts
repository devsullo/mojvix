import { LoggedOutGuardService as LoggedOutGuard } from './../shared/guards/logged-out-guard.service';
import { NgModule } from '@angular/core';
import { JoinFormComponent } from './join-form/join-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TransPipe } from '../shared/pipes/trans.pipe';
import { EmptyComponent } from './empty/empty.component';
import { PassRecoverFormComponent } from './pass-recover-form/pass-recover-form.component';
import { LoadingComponent } from './loading/loading.component';
import { FormErrorBoxComponent } from './form-error-box/form-error-box.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'join',
        component: JoinFormComponent,
        data: { formStyle: 'light' },
        canActivate: [LoggedOutGuard]
      },
      {
        path: 'password-recover',
        component: PassRecoverFormComponent,
        data: { formStyle: 'light' },
        canActivate: [LoggedOutGuard]
      }
    ])
  ],
  exports: [LoadingComponent],
  declarations: [
    JoinFormComponent,
    EmptyComponent,
    PassRecoverFormComponent,
    LoadingComponent,
    FormErrorBoxComponent
  ],
  providers: [TransPipe]
})
export class ComponentsModule {}
