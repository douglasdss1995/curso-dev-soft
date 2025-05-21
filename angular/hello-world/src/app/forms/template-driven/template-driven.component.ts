import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [
    FormsModule
  ],
  templateUrl: './template-driven.component.html',
  standalone: true,
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  name = '';

  protected readonly FormsModule = FormsModule;
}
