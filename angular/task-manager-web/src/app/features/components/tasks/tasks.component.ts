import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from '../../services/task.service';
import {BaseComponent} from '../../../shared/components/base.component';
import {TaskDeleteDialogComponent} from './task-delete-dialog/task-delete-dialog.component';
import {Task} from '../../models/task';


@Component({
  selector: 'app-tasks',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent extends BaseComponent implements OnInit {

  override displayedColumns = ['id', 'title', 'actions'];

  service: TaskService = inject(TaskService);

  search(): void {
    this.service.getAll().subscribe(result => this.dataSource = result);
  }

  ngOnInit(): void {
    this.search();
  }

  edit(id: string) {
    this.router.navigate([`task/${id}`]);
  }

  delete(task: Task): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      data: task,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.search();
    });
  }


}
