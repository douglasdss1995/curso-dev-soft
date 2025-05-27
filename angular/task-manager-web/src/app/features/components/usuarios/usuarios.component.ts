import {Component, inject, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {RouterLink} from '@angular/router';
import {BaseComponent} from '../../../shared/components/base.component';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-usuarios',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent extends BaseComponent implements OnInit {

  override displayedColumns = ['id', 'nome', 'actions'];

  service:TaskService = inject(TaskService);

  search(): void {
    this.service.getAll().subscribe(result => this.dataSource = result);
  }

}

