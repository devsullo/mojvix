import { NgModule } from '@angular/core';
import { SeanceModule } from './seance/seance.module';
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [SeanceModule, MoviesModule, UserModule],
  declarations: []
})
export class PagesModule {}
