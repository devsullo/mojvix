import { NgModule } from '@angular/core';
import { BlurbsComponent } from './index/index.component';
import { BlurbsService } from './blurbs.service';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../../shared/shared.module';
import { CommentsService } from './comments/comments.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [
    BlurbsComponent
  ],
  declarations: [
    BlurbsComponent,
    CommentsComponent
  ],
  providers: [BlurbsService, CommentsService]
})
export class BlurbsModule { }
