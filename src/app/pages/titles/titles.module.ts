import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitlesComponent } from './list/titles.component';
import { TitlesService } from './titles.service';
import { TitleComponent } from './single/title.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'box-office', component: TitlesComponent },
    ])
  ],
  declarations: [TitlesComponent, TitleComponent],
  providers: [TitlesService]
})
export class TitlesModule { }
