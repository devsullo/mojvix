import { Component, OnInit, Input } from '@angular/core';
import { SeanceService } from '../seance.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(
    private seanceService: SeanceService
  ) {}

  ngOnInit() {
  }

  onPlayerReady(api) {
    this.seanceService.initPlayerApi(api);
  }
}
