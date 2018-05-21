import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlurbComponent } from './post-blurb.component';

describe('PostBlurbComponent', () => {
  let component: PostBlurbComponent;
  let fixture: ComponentFixture<PostBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
