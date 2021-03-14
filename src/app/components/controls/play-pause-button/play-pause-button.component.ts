import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.sass']
})
export class PlayPauseButtonComponent implements OnInit, OnDestroy {

  isPlaying: boolean = true
  currentIcon: string = '/assets/play_arrow.svg'

  isPlayingSubscription: Subscription

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {

    // subscribes to player state (playing/paused)
    this.isPlayingSubscription = this._playerService.isPlayingSubject$.subscribe(isPlaying => {
      // update local state of player
      this.isPlaying = isPlaying
      this.changeIcon()
    })
  }

  ngOnDestroy(): void {
    this.isPlayingSubscription.unsubscribe()
  }

  toggle() {
    this._playerService.toggle()
  }

  // changes icon of button
  changeIcon() {
    this.currentIcon = this.isPlaying ? '/assets/pause.svg' : '/assets/play_arrow.svg'
  }

}
