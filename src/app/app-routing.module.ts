import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(([
      { path: '', redirectTo: 'box-office', pathMatch: 'full' },
      { path: '**', redirectTo: 'box-office', pathMatch: 'full' },
    ])),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
