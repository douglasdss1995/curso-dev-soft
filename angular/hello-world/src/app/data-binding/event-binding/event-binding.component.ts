import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  message: string = 'Clique no no botão para mudar esta mensagm';

  changeMessage(): void {
    this.message = 'Voce clicou no botão'
  }

}
