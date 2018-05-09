import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {
  navigationTab = new BehaviorSubject<string>('blurbs');
  $navigationTab = this.navigationTab.asObservable();
  constructor() {}

  changeNavigationTab(tab: string): void {
    this.navigationTab.next(tab);
  }
}
