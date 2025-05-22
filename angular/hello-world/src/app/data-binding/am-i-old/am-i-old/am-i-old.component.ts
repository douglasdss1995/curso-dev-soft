import {Component} from '@angular/core';

@Component({
  selector: 'app-am-i-old',
  imports: [AmIOldComponent],
  templateUrl: './am-i-old.component.html',
  standalone: true,
  styleUrl: './am-i-old.component.css'
})
export class AmIOldComponent {
  Idade: number = 1;

}
