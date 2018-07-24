import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [SharedModule],
  exports: [IndexComponent],
  declarations: [IndexComponent],
  providers: []
})
export class ChatModule {}
