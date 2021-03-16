import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-duration-bar',
  templateUrl: './duration-bar.component.html',
  styleUrls: ['./duration-bar.component.sass']
})
export class DurationBarComponent implements OnInit {

  @ViewChild('bar') bar: ElementRef

  value: string

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this._playerService.currentTimeSubject$.subscribe(seconds => {
     this.value = Math.round(seconds / this._playerService.duration * 100) + '%'
    })
  }

  move(event: any): void {
    // bar width
    const barWidth: number = this.bar.nativeElement.offsetWidth
    
    // position in window where we clicked
    const clickPosition: number = event.clientX - this.bar.nativeElement.getBoundingClientRect().left
    
    // get seconds per pixel
    const secondsPerPixel: number = this._playerService.duration / barWidth
    
    // set currentTime
    this._playerService.currentTime = secondsPerPixel * clickPosition
  }

}
