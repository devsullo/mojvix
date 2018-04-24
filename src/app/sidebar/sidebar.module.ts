import { NgModule } from '@angular/core';
import { BlurbsModule } from './blurbs/blurbs.module';
import { SidebarComponent } from './sidebar.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [BlurbsModule, HeaderModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class SidebarModule {}
