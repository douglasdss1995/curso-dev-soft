import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-slider',
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {

  value = 0;
  
}
