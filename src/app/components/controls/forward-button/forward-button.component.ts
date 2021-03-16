import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-forward-button',
  templateUrl: './forward-button.component.html',
  styleUrls: ['./forward-button.component.sass']
})
export class ForwardButtonComponent implements OnInit {

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

  forward() {
    if (this._playerService.currentTime + 10 > this._playerService.duration) this._playerService.currentTime = this._playerService.duration
    else this._playerService.currentTime += 10
  }

}
