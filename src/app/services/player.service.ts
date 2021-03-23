import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  //#region is playing block

  // variable to store player state
  private _isPlayingState: boolean = false 

  // return current state
  private get _isPlaying(): boolean {
    return this._isPlayingState
  }

  // set current player state
  private set _isPlaying(state: boolean) {
    this._isPlayingState = state

    // resolve subject to update controls
    this.isPlayingSubject$.next(state)
  }

  // subject to which controls are subscribed to update their values according to state of player (playing/paused)
  isPlayingSubject$: Subject<boolean> = new Subject<boolean>()

  //#endregion
  
  //#region current time block

  private _currentTime: number = 0

  get currentTime(): number {
    return this._currentTime
  }

  set currentTime(seconds: number) {
    this._currentTime = seconds
    this.currentTimeSubject$.next(seconds)
  }

  currentTimeSubject$: Subject<number> = new Subject<number>()

  //#endregion

  //#region fullscreen

  private _isFullScreenState: boolean = false

  private get _isFullScreen(): boolean {
    return this._isFullScreenState
  }

  private set _isFullScreen(value: boolean) {
    this._isFullScreenState = value
    this.isFullScreenSubject$.next(value)
  }

  isFullScreenSubject$: Subject<boolean> = new Subject<boolean>()


  //#endregion

  duration: number = 0

  pause(): void {
    this._isPlaying = false
  }

  play(): void {
    this._isPlaying = true
  }

  toggle(): void {
    this._isPlaying = !this._isPlaying
  }

  toggleFullScreen(): void {
    this._isFullScreen = !this._isFullScreen
  }

}
