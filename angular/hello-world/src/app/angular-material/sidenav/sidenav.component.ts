import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'sidenav-backdrop-example',
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class SidenavComponent {

}
