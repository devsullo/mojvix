import { ScrollService } from './shared/services/scroll.service';
import { NgModule } from '@angular/core';
import { JoinFormService } from './components/join-form/join-form.service';
import { PassRecoverFormService } from './components/pass-recover-form/pass-recover-form.service';
import { RouteService } from './shared/services/route.service';


@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ScrollService,
    JoinFormService,
    PassRecoverFormService,
    RouteService
  ]
})
export class CoreModule {}
