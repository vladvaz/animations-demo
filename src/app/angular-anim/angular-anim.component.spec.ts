import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimComponent } from './angular-anim.component';

describe('AngularAnimComponent', () => {
  let component: AngularAnimComponent;
  let fixture: ComponentFixture<AngularAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
