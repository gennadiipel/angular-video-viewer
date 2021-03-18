import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @Input() videoUrl: string = 'https://www.w3schools.com/html/mov_bbb.mp4'

  @Input() width: string = 'auto'
  @Input() height: string = '100%'

  constructor(public settingsService: SettingsService) {}


  ngOnInit() {
    this.settingsService.settings = {
      videoUrl: this.videoUrl,
      width: this.width,
      height: this.height
    }

  }
}
