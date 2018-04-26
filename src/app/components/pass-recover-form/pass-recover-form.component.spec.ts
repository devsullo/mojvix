import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassRecoverFormComponent } from './pass-recover-form.component';

describe('PassRecoverFormComponent', () => {
  let component: PassRecoverFormComponent;
  let fixture: ComponentFixture<PassRecoverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassRecoverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassRecoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
