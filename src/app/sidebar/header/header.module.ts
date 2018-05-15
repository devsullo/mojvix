import { IndexComponent } from './index/index.component';
// import { LoggedInActions } from './logged-in/logged-in.actions';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderService } from './header.service';

@NgModule({
  imports: [SharedModule],
  exports: [IndexComponent],
  declarations: [NavigationComponent, LoggedOutComponent, IndexComponent],
  providers: [HeaderService]
})
export class HeaderModule { }
