import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BlurbsModule } from './blurbs/blurbs.module';
import { SidebarComponent } from './sidebar.component';
import { HeaderModule } from './header/header.module';
import { ChatModule } from './chat/chat.module';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
  imports: [SharedModule, BlurbsModule, HeaderModule, ChatModule, NavigationModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class SidebarModule {}
