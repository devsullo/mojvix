import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [IndexComponent],
  declarations: [IndexComponent]
})
export class NotificationsModule {}
