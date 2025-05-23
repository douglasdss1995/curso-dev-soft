import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-father-to-son-son',
  imports: [],
  templateUrl: './father-to-son-son.component.html',
  styleUrl: './father-to-son-son.component.css'
})
export class FatherToSonSonComponent {

  @Input() message: string = '';

}
