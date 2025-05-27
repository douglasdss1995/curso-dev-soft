import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Input() drawer!: MatDrawer;

}
