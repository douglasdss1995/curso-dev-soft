import {Router} from '@angular/router';
import {inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

export class BaseComponent {

  public dataSource: any = new MatTableDataSource();
  public displayedColumns: string[] = [];
  readonly dialog = inject(MatDialog);

  router: Router = inject(Router);

}
