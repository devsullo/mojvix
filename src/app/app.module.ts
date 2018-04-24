import { SidebarModule } from './sidebar/sidebar.module';
import { SeanceModule } from './pages/seance/seance.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TitlesModule } from './pages/titles/titles.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SeanceModule,
    BrowserModule,
    TitlesModule,
    SidebarModule,
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
