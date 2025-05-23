import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonToFatherFatherComponent } from './son-to-father-father.component';

describe('SonToFatherFatherComponent', () => {
  let component: SonToFatherFatherComponent;
  let fixture: ComponentFixture<SonToFatherFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonToFatherFatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonToFatherFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
