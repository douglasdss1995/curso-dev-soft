import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrverviewExampleDialogComponent } from './dialog-orverview-example-dialog.component';

describe('DialogOrverviewExampleDialogComponent', () => {
  let component: DialogOrverviewExampleDialogComponent;
  let fixture: ComponentFixture<DialogOrverviewExampleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOrverviewExampleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrverviewExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
