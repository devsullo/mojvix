import { NgModule } from '@angular/core';
import { BlurbsComponent } from './list/blurbs.component';
import { BlurbsService } from './blurbs.service';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
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
