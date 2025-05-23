import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-slider',
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider.component.html',
  standalone: true,
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  nota = ''
}
