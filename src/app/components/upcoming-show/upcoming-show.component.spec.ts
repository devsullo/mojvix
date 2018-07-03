import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShowComponent } from './upcoming-show.component';

describe('UpcomingShowComponent', () => {
  let component: UpcomingShowComponent;
  let fixture: ComponentFixture<UpcomingShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
