import { TitlesComponent } from './pages/titles/list/titles.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: TitlesComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '/', pathMatch: 'full' }
      ]
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
