import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

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
  isPlayingSubject$: Subject<boolean> = new Subject<boolean>();



  pause(): void {
    this._isPlaying = false
  }

  play(): void {
    this._isPlaying = true
  }

  toggle(): void {
    this._isPlaying = !this._isPlaying
  }

}
