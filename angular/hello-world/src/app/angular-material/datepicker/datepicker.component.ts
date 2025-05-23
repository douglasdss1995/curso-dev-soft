import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {

}
