import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAnimComponent } from './simple-anim.component';

describe('SimpleAnimComponent', () => {
  let component: SimpleAnimComponent;
  let fixture: ComponentFixture<SimpleAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
