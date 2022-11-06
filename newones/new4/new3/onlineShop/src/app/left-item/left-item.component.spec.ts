import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftItemComponent } from './left-item.component';

describe('LeftItemComponent', () => {
  let component: LeftItemComponent;
  let fixture: ComponentFixture<LeftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
