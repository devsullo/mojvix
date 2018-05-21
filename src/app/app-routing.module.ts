import { MoviesComponent } from './pages/movies/list/movies.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: MoviesComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/', pathMatch: 'full' }
      ]
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
