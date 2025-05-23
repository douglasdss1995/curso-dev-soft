import {Component} from '@angular/core';
import {DatePipe, DecimalPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    SlicePipe,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './pipes.component.html',
  standalone: true,
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  date: Date = new Date();
  pi: number = 3.1415926535897323846;
}
