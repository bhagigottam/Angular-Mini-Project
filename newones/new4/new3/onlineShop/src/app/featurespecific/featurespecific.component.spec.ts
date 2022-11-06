import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturespecificComponent } from './featurespecific.component';

describe('FeaturespecificComponent', () => {
  let component: FeaturespecificComponent;
  let fixture: ComponentFixture<FeaturespecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturespecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturespecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
