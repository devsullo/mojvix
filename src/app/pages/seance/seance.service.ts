import { Injectable } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import {
  IPlayable,
  IMediaSubscriptions
} from 'videogular2/src/core/vg-media/i-playable';
import { Promise } from 'core-js';

@Injectable()
export class SeanceService {
  preload = 'auto';
  api: VgAPI;
  playerReadyResolve: any;
  constructor() {}

  get playerApi() {
    return this.api;
  }

  playerReady(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.playerReadyResolve = resolve;
    });
  }

  initPlayer(api: VgAPI) {
    this.api = api;
    this.playerReadyResolve(api);
  }
}
