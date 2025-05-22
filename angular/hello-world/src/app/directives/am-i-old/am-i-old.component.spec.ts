import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmIOldComponent } from './am-i-old.component';

describe('AmIOldComponent', () => {
  let component: AmIOldComponent;
  let fixture: ComponentFixture<AmIOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmIOldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmIOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
