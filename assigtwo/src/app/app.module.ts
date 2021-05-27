import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InnerleftsidebarComponent } from './innerleftsidebar/innerleftsidebar.component';
import { InnerrightsidebarComponent } from './innerrightsidebar/innerrightsidebar.component';
import { SidebarheaderComponent } from './sidebarheader/sidebarheader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InnerleftsidebarComponent,
    InnerrightsidebarComponent,
    SidebarheaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
