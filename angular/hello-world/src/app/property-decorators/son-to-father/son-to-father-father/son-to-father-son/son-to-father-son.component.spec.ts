import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonToFatherSonComponent } from './son-to-father-son.component';

describe('SonToFatherSonComponent', () => {
  let component: SonToFatherSonComponent;
  let fixture: ComponentFixture<SonToFatherSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonToFatherSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonToFatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
