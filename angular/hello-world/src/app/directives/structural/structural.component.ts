import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-structural',
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {

  isVisible: boolean = false;

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  fruits: Array<String> = ['Maça', 'Pera', 'Laranja', 'Limão'];

}
