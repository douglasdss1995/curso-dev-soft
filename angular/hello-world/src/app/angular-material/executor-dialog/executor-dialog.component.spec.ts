import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorDialogComponent } from './executor-dialog.component';

describe('ExecutorDialogComponent', () => {
  let component: ExecutorDialogComponent;
  let fixture: ComponentFixture<ExecutorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
