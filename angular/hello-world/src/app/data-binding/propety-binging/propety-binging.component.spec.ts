import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetyBingingComponent } from './propety-binging.component';

describe('PropetyBingingComponent', () => {
  let component: PropetyBingingComponent;
  let fixture: ComponentFixture<PropetyBingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropetyBingingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropetyBingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
