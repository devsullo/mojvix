import { ScrollService } from './../../shared/services/scroll.service';
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
  playerSubscriptions: IMediaSubscriptions;
  constructor(
    private scrollService: ScrollService,
  ) {}

  get playerApi() {
    return this.api;
  }

  playerReady(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.playerReadyResolve = resolve;
    });
  }

  initPlayerApi(api: VgAPI) {
    this.api = api;
    if (this.playerReadyResolve) {
      this.playerReadyResolve(api);
    }
  }

  scrollBottom() {
    if (this.playerSubscriptions) {
      this.scrollService.scrollBottom('#seance-body-area');
      return;
    }
    this.playerReady().then(api => {
      this.playerSubscriptions = api.subscriptions;
      this.playerSubscriptions.canPlay.subscribe(val => {
        this.scrollService.scrollBottom('#seance-body-area');
      });
    });
  }
}
