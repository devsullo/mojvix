import { SeanceService } from './../../pages/seance/seance.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit, OnDestroy, AfterViewInit {
  sub: any;
  constructor(
    private route: ActivatedRoute,
    private seanceService: SeanceService,
    private scrollServce: ScrollService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    this.sub = this.route.data.subscribe(data => {
      this.scrollServce.update(data.scrollElement);
    });
  }
}
