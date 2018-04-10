import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurbsComponent } from './list/blurbs.component';
import { BlurbComponent } from './single/blurb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlurbsComponent
  ],
  declarations: [
    BlurbsComponent,
    BlurbComponent
  ]
})
export class BlurbsModule { }
