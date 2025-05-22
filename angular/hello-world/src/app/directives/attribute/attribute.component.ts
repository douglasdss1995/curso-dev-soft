import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [
    FormsModule
  ],
  templateUrl: './attribute.component.html',
  standalone: true,
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  isVisible = false;
  idade: number = 1;
  fruits: string[] = ['Maça', 'Banana', 'Uva', 'Laranja', 'Pera']

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
