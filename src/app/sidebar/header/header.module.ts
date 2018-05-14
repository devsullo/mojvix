// import { LoggedInActions } from './logged-in/logged-in.actions';
import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderService } from './header.service';

@NgModule({
  imports: [SharedModule],
  exports: [HeaderComponent],
  declarations: [LoggedInComponent, LoggedOutComponent, HeaderComponent],
  providers: [HeaderService]
})
export class HeaderModule { }
