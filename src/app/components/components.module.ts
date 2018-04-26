import { NgModule } from '@angular/core';
import { JoinFormComponent } from './join-form/join-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TransPipe } from '../shared/pipes/trans.pipe';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: 'join', component: JoinFormComponent }])
  ],
  declarations: [JoinFormComponent, EmptyComponent],
  providers: [TransPipe]
})
export class ComponentsModule {}
