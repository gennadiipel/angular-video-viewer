import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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


  isPlayingSubscription: Subscription

  @ViewChild('videoPlayer') videoPlayer: ElementRef


  constructor(
    public settingsService: SettingsService,
    private _playerService: PlayerService,
    ) { }

  ngOnInit(): void {
    

    // subscribes to player's state to play and pause <video> according to its state in service
    this.isPlayingSubscription = this._playerService.isPlayingSubject$.subscribe(isPlaying => {
      if (isPlaying) {
        this.videoPlayer.nativeElement.play()
      } else {
        this.videoPlayer.nativeElement.pause()
      }
    })

    // if time was skipped in player service we change <video> element's currentTime
    this._playerService.currentTimeSubject$
    .subscribe(seconds => {
      if (seconds != this.videoPlayer.nativeElement.currentTime) {
        this.videoPlayer.nativeElement.currentTime = seconds
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

  // on time updates we update time value in player service
  onTimeUpdate() {
    this._playerService.currentTime = this.videoPlayer.nativeElement.currentTime
  }

  onDurationChange() {
    this._playerService.duration = this.videoPlayer.nativeElement.duration
    console.log(this._playerService.duration)
  }

  onFullScreenChange() {
    this._playerService.toggleFullScreen()
  }

  toggleFullscreen() {
    this._playerService.toggleFullScreen()
  }

}
