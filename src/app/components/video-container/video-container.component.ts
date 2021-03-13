import { Component, Input, OnInit } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings.interface';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.sass']
})
export class VideoContainerComponent implements OnInit {

  settings: Settings

  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings = this.settingsService.settings
  }

}
