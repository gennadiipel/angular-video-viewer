import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-duration-bar',
  templateUrl: './duration-bar.component.html',
  styleUrls: ['./duration-bar.component.sass']
})
export class DurationBarComponent implements OnInit {

  value: string

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this._playerService.currentTimeSubject$.subscribe(seconds => {
     this.value = Math.round(seconds / this._playerService.duration * 100) + '%'
    })
  }

}
