import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [],
  exports: [HeaderComponent],
  declarations: [LoggedInComponent, LoggedOutComponent, HeaderComponent]
})
export class HeaderModule { }
