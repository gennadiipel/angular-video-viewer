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
    this._playerService.currentTime += 10
  }

}
