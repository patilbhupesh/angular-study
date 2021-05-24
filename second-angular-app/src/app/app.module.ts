import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SubtitleComponent,
    SidebarComponent,
    ArticleComponent,
    ListComponent,
    ParagraphComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
