import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from '../../../services/task.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-item',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  formGroup!: FormGroup;
  itemId: string | null = null;

  title: string = 'Cadastro de Tarefas';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private location: Location,
  ) {
  }

  backHistory(): void {
    this.location.back();
  }

  createFormGroup(): void {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getUrlParameters(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log(this.itemId);
  }

  requestObject(): void {
    this.getUrlParameters();
    if (this.itemId) {
      this.taskService.getById(this.itemId).subscribe(data => {
        this.formGroup.patchValue(data);
      });
    }
  }

  ngOnInit() {
    this.createFormGroup();
    this.requestObject();
  }

  saveOrUpdate() {
    if (this.formGroup.valid) {
      if (this.itemId) {
        this.taskService.updateItem(this.itemId, this.formGroup.value).subscribe(() => {
          this.router.navigate(['/tasks']); // Redirecione após editar
        });
      }
      this.taskService.create(this.formGroup.value).subscribe(() => this.router.navigate(['/tasks']));
    }
  }

}
