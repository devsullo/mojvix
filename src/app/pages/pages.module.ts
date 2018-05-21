import { NgModule } from '@angular/core';
import { SeanceModule } from './seance/seance.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [SeanceModule, MoviesModule],
  declarations: []
})
export class PagesModule {}
