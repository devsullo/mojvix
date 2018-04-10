import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurbsComponent } from './list/blurbs.component';
import { BlurbsService } from './blurbs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlurbsComponent
  ],
  declarations: [
    BlurbsComponent
  ],
  providers: [BlurbsService]
})
export class BlurbsModule { }
