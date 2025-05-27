import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from '../../../services/task.service';
import {Task} from '../../../models/task';
import {BaseComponent} from '../../../../shared/components/base.component';

@Component({
  selector: 'app-task-delete-dialog',
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './task-delete-dialog.component.html',
  styleUrl: './task-delete-dialog.component.css'
})
export class TaskDeleteDialogComponent extends BaseComponent {

  readonly dialogRef = inject(MatDialogRef<TaskDeleteDialogComponent>);
  readonly data = inject<Task>(MAT_DIALOG_DATA);

  service: TaskService = inject(TaskService);

  closeDialog(): void {
    this.dialogRef.close(this.data);
  }

  delete(): void {
    this.service.delete(this.data.id).subscribe(
      () => {
        this.closeDialog();
        this.router.navigate(['/tasks']);
      }
    )
  }

}
