import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  standalone: true,
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message: string = 'Clique no botão para mudar esta mensagem';

  changeMessage(): void {
    this.message = 'Voce clicou no botão'
  }

}
