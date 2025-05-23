import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherToSonFatherComponent } from './father-to-son-father.component';

describe('FatherToSonFatherComponent', () => {
  let component: FatherToSonFatherComponent;
  let fixture: ComponentFixture<FatherToSonFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherToSonFatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherToSonFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
