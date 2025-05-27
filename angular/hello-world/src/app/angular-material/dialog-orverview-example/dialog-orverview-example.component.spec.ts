import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrverviewExampleComponent } from './dialog-orverview-example.component';

describe('DialogOrverviewExampleComponent', () => {
  let component: DialogOrverviewExampleComponent;
  let fixture: ComponentFixture<DialogOrverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOrverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
