import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurbsComponent } from './list/blurbs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlurbsComponent
  ],
  declarations: [
    BlurbsComponent
  ]
})
export class BlurbsModule { }
