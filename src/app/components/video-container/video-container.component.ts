import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Settings } from 'src/app/interfaces/settings.interface';
import { PlayerService } from 'src/app/services/player.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.sass']
})
export class VideoContainerComponent implements OnInit, OnDestroy {

  settings: Settings

  isPlayingSubscription: Subscription

  @ViewChild('videoPlayer') videoPlayer: ElementRef


  constructor(
    public settingsService: SettingsService,
    private _playerService: PlayerService
    ) { }

  ngOnInit(): void {
    this.settings = this.settingsService.settings

    // subscribes to player's state to play and pause <video> according to its state in service
    this.isPlayingSubscription = this._playerService.isPlayingSubject$.subscribe(isPlaying => {
      if (isPlaying) {
        this.videoPlayer.nativeElement.play()
      } else {
        this.videoPlayer.nativeElement.pause()
      }
    })
  }

  ngOnDestroy(): void {
    this.isPlayingSubscription.unsubscribe()
  }

  onPlay(event: Event) {
    this._playerService.play()
  }

  onPause(event: Event) {
    this._playerService.pause()
  }

}
