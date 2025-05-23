import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  standalone: true,
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message = 'clique no botão para mudar essa mensagem';
  alterar = 'seguir'

  changeMessage() {
    this.message = 'Você clicou no Botão';
  }

  returntoDefault() {
    this.message = 'clique no botão para mudar essa mensagem';
  }

}
