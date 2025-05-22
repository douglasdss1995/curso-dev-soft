import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-atribute',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './atribute.component.html',
  standalone: true,
  styleUrl: './atribute.component.css'
})
export class AtributeComponent {

  isVisible: boolean = false;
  idade: number = 1;
  fruits: string[] = ['Maça', 'Banana', 'Caju', 'Uva', 'Abacate', 'Framboesa'];

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

}
