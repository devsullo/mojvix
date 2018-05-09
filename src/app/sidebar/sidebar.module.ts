import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BlurbsModule } from './blurbs/blurbs.module';
import { SidebarComponent } from './sidebar.component';
import { HeaderModule } from './header/header.module';
import { ChatModule } from './chat/chat.module';
import { MainComponent } from './chat/main/main.component';

@NgModule({
  imports: [SharedModule, BlurbsModule, HeaderModule, ChatModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent, MainComponent]
})
export class SidebarModule {}
