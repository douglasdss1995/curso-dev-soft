import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [
    DatePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  date: Date = new Date();
  pi: number = 3.14159265358979323846;
  format: string | undefined;

}
