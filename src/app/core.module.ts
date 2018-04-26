import { ScrollService } from './shared/scroll.service';
import { NgModule } from '@angular/core';
import { JoinFormService } from './components/join-form/join-form.service';
import { PassRecoverFormService } from './components/pass-recover-form/pass-recover-form.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ScrollService, JoinFormService, PassRecoverFormService],
})
export class CoreModule {}
