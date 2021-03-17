import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-video-toolbar',
  templateUrl: './video-toolbar.component.html',
  styleUrls: ['./video-toolbar.component.sass']
})
export class VideoToolbarComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
