import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  standalone: true,
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message = "Clique no botão para mudar estar menssagem!";

  changeMessage() {
    this.message = "Você clicou no botão";
  }

  changeMensagem() {
    this.message = "Você clicou duas vezes no botão";
  }


}
