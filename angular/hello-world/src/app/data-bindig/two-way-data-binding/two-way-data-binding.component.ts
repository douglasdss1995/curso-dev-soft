import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './two-way-data-binding.component.html',
  standalone: true,
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {

  name = "";

}
