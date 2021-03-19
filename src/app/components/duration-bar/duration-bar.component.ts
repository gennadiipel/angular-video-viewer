import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-duration-bar',
  templateUrl: './duration-bar.component.html',
  styleUrls: ['./duration-bar.component.sass']
})
export class DurationBarComponent implements OnInit {

  @ViewChild('bar') bar: ElementRef

  value: string
  isMouseDown: boolean = false

  constructor(
    public playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.currentTimeSubject$.subscribe(seconds => {
     this.value = Math.round(seconds / this.playerService.duration * 100) + '%'
    })
  }

  move(event: MouseEvent): void {

    this.isMouseDown = true
    this.update(event)
    
  }

  update(event: MouseEvent) {
    // bar width
    const barWidth: number = this.bar.nativeElement.offsetWidth
    
    // position in window where we clicked
    const clickPosition: number = event.clientX - this.bar.nativeElement.getBoundingClientRect().left
    
    // get seconds per pixel
    const secondsPerPixel: number = this.playerService.duration / barWidth
    
    // set currentTime
    this.playerService.currentTime = secondsPerPixel * clickPosition
  }
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    if (this.isMouseDown) {
      this.update(event)
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event) {
    this.isMouseDown = false
  }

}
