import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-presentation',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],

  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

}
