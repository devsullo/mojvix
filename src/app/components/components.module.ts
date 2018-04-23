import { NgModule } from '@angular/core';
import { JoinFormComponent } from './join-form/join-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [JoinFormComponent],
})
export class ComponentsModule { }
