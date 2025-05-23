import {Component} from '@angular/core';
import {FatherToSonSonComponent} from './father-to-son-son/father-to-son-son.component';

@Component({
  selector: 'app-father-to-son-father',
  imports: [
    FatherToSonSonComponent
  ],
  templateUrl: './father-to-son-father.component.html',
  styleUrl: './father-to-son-father.component.css'
})
export class FatherToSonFatherComponent {

  fatherMessage = 'Olá, essa mensagem vem do componente pai';

}
