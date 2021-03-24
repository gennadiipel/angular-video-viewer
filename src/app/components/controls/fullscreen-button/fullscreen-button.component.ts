import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings.interface';

import { PlayerService } from 'src/app/services/player.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-fullscreen-button',
  templateUrl: './fullscreen-button.component.html',
  styleUrls: ['./fullscreen-button.component.sass']
})
export class FullscreenButtonComponent implements OnInit {

  buttonIconPath: string = '/assets/fullscreen.svg'

  settings: Settings

  constructor(
    private _playerService: PlayerService,
    private _settingsService: SettingsService
  ) { }

  ngOnInit(): void {

    this.settings = {...this._settingsService.settings}
    console.log(this.settings)

    this._playerService.isFullScreenSubject$.subscribe(isFullScreen => {
      if (isFullScreen) {
        this.buttonIconPath = '/assets/fullscreen_exit.svg'
        this._settingsService.settings.height = '100%'
        this._settingsService.settings.width = 'auto'
      } else {
        this.buttonIconPath = '/assets/fullscreen.svg'

        
        this._settingsService.settings = {...this.settings}

        this._settingsService.settings.height = 'auto'
        this._settingsService.settings.width = '600px'


      }

      console.log('Service: ', this._settingsService.settings)
        console.log('Copy: ', this.settings)
    })
  }

  toggleFullscreen() {
    this._playerService.toggleFullScreen()
  }

}
