import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-show',
  templateUrl: './upcoming-show.component.html',
  styleUrls: ['./upcoming-show.component.scss']
})
export class UpcomingShowComponent implements OnInit {
  upcomingShow = {
    time: '00:00',
    remain: '00'
  };
  min = true;

  constructor() {}

  ngOnInit() {
    this.startTime();
  }

  startTime() {
    const now = new Date();
    this.min = !this.min;
    this.checkTime(now);
    setTimeout(() => {
      this.startTime();
    }, 1000);
  }

  checkTime(now) {
    const h = now.getHours();
    const m = now.getMinutes();
    let time, remain;
    if (0 < m && m < 30) {
      time = h.pad() + ':30';
      remain = (30 - m).pad();
    } else if (60 > m && m > 30) {
      const hour = h + 1;
      if (hour !== 24) {
        time = hour.pad() + ':00';
      } else {
        time = '00:00';
      }
      remain = (60 - m).pad();
    } else if (m === 0 || m === 30) {
      time = h.pad() + ':' + m.pad();
      remain = '00';
    }
    this.upcomingShow = { time, remain };
  }
}
