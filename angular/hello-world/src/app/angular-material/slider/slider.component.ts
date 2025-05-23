import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider.component.html',
  styleUrl: 'slider.component.css',
  imports: [MatSliderModule, FormsModule],
})
export class SliderComponent {

  value = 0;
}

