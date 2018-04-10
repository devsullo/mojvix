import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './list/titles.component';
import { TitlesService } from './titles.service';
import { EscapeHtmlPipe } from '../../shared/pipes/escape-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'box-office', component: TitlesComponent },
    ])
  ],
  declarations: [TitlesComponent, EscapeHtmlPipe],
  providers: [TitlesService]
})
export class TitlesModule { }
