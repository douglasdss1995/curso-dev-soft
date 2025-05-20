import {Component} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  standalone: true,
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  isDisabled = true;

  buttonType = "submit";

}
