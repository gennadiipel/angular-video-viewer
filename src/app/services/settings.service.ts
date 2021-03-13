import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings.interface'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  settings: Settings = null



}
