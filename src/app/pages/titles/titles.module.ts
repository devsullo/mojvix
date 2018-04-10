import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './list/titles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'box-office', component: TitlesComponent },
    ])
  ],
  declarations: [TitlesComponent]
})
export class TitlesModule { }
