import { Component } from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

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
export class UsuariosComponent {

}
