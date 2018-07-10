import { ComponentsModule } from './../../components/components.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './list/movies.component';
import { MoviesService } from './movies.service';
import { MovieComponent } from './single/movie.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: MoviesComponent },
    ])
  ],
  declarations: [MoviesComponent, MovieComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
