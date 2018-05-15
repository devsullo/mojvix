import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [IndexComponent],
  declarations: [IndexComponent]
})
export class NavigationModule { }
