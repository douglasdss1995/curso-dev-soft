import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {

  isVisible = false;
  idade: number = 1;
  fruits: string[] = ['Maça', 'Pera', 'Uva', 'Tomate'];

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

}
