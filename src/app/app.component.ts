import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @Input() videoUrl: string = 'https://www.w3schools.com/html/mov_bbb.mp4'

  @Input() width: string = 'auto'
  @Input() height: string = '100%'

  constructor(
    public settingsService: SettingsService,
    private _playerService: PlayerService
    ) {}


  ngOnInit() {
    this.settingsService.settings = {
      videoUrl: this.videoUrl,
      width: this.width,
      height: this.height
    }

  }

  toggle() {
    this._playerService.toggle()
  }
}
