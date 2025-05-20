import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperentyBidingComponent } from './properenty-biding.component';

describe('ProperentyBidingComponent', () => {
  let component: ProperentyBidingComponent;
  let fixture: ComponentFixture<ProperentyBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperentyBidingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProperentyBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
