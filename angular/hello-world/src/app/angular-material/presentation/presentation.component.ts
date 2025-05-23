import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'presentation.component.html',
  styleUrl: 'presentation.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class PresentationComponent {
}

