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
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    SlicePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  date: Date = new Date();
  pi: number = 3.12159265358979323846;

}
