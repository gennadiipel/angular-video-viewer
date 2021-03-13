import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { VideoToolbarComponent } from './components/video-toolbar/video-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContainerComponent,
    VideoToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
