import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
