import {Component} from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    SlicePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  date: Date = new Date();
  pi: number = 3.14159265358979323846;

}
