import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-atribute',
  imports: [
    CommonModule,
  ],
  templateUrl: './atribute.component.html',
  styleUrl: './atribute.component.css'
})
export class AtributeComponent {
  toggle: boolean = false;

  public toggleVisibility(): void {
    this.toggle = !this.toggle;
  }

}
