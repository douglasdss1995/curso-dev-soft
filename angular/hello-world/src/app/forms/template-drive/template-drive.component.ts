import {Component} from '@angular/core';

let formsModule;

@Component({
  selector: 'app-template-drive',
  imports: [
    formsModule
  ],
  templateUrl: './template-drive.component.html',
  standalone: true,
  styleUrl: './template-drive.component.css'
})
export class TemplateDriveComponent {

  name: string = '';

}
