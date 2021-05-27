import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RightSideComponent } from './right-side/right-side.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    MainContentComponent,
    RightSideComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
