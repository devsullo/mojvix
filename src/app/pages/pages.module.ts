import { NgModule } from '@angular/core';
import { SeanceModule } from './seance/seance.module';
import { TitlesModule } from './titles/titles.module';

@NgModule({
  imports: [SeanceModule, TitlesModule],
  declarations: []
})
export class PagesModule {}
