import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { ChatService } from './chat.service';

@NgModule({
  imports: [SharedModule],
  exports: [IndexComponent],
  declarations: [IndexComponent],
  providers: [ChatService]
})
export class ChatModule {}
