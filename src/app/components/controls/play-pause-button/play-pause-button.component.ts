import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.sass']
})
export class PlayPauseButtonComponent implements OnInit {

  isPlaying: boolean = true
  currentIcon: string = '/assets/play_arrow.svg'

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isPlaying = !this.isPlaying
    this.currentIcon = this.isPlaying ? '/assets/play_arrow.svg' : '/assets/pause.svg'
  }

}
