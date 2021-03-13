import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { VideoToolbarComponent } from './components/video-toolbar/video-toolbar.component';
import { PlayPauseButtonComponent } from './components/controls/play-pause-button/play-pause-button.component';
import { GoogleIconModule } from 'google-icon';
import { GoogleIconComponent } from 'google-icon/google-icon/google-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContainerComponent,
    VideoToolbarComponent,
    PlayPauseButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
