import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurbsComponent } from './list/blurbs.component';
import { BlurbsService } from './blurbs.service';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlurbsComponent
  ],
  declarations: [
    BlurbsComponent,
    CommentsComponent
  ],
  providers: [BlurbsService]
})
export class BlurbsModule { }
