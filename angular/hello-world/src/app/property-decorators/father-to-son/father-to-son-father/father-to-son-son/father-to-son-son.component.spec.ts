import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherToSonSonComponent } from './father-to-son-son.component';

describe('FatherToSonSonComponent', () => {
  let component: FatherToSonSonComponent;
  let fixture: ComponentFixture<FatherToSonSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherToSonSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherToSonSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
