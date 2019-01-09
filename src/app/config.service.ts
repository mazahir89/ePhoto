import { configuration } from './configuration';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfig() {

    return this.config;
  }
}
