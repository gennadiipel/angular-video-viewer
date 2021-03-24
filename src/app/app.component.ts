import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from './services/player.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @Input() videoUrl: string = 'https://www.w3schools.com/html/mov_bbb.mp4'

  @Input() width: string = '600px'
  @Input() height: string = 'auto'

  @ViewChild('mainContainer') mainContainer: ElementRef

  constructor(
    public settingsService: SettingsService,
    private _playerService: PlayerService,
    ) {}


  ngOnInit() {
    this.settingsService.settings = {
      videoUrl: this.videoUrl,
      width: this.width,
      height: this.height
    }

    // subscribe to isFullScreen and turn on it when true
    this._playerService.isFullScreenSubject$
    .subscribe(isFullScreen => {
      if (isFullScreen) {
        this.mainContainer.nativeElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    })

  }

  toggle() {
    this._playerService.toggle()
  }
}
