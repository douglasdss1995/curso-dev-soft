import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
