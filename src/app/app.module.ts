import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { VideoToolbarComponent } from './components/video-toolbar/video-toolbar.component';
import { PlayPauseButtonComponent } from './components/controls/play-pause-button/play-pause-button.component';
import { ForwardButtonComponent } from './components/controls/forward-button/forward-button.component';
import { DurationBarComponent } from './components/duration-bar/duration-bar.component';
import { TimeComponent } from './components/controls/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoContainerComponent,
    VideoToolbarComponent,
    PlayPauseButtonComponent,
    ForwardButtonComponent,
    DurationBarComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
