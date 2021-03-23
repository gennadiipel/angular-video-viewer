import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-fullscreen-button',
  templateUrl: './fullscreen-button.component.html',
  styleUrls: ['./fullscreen-button.component.sass']
})
export class FullscreenButtonComponent implements OnInit {

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

  toggleFullscreen() {
    this._playerService.toggleFullScreen()
  }

}
