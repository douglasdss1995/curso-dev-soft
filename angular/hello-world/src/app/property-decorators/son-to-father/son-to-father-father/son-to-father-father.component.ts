import {Component} from '@angular/core';
import {SonToFatherSonComponent} from './son-to-father-son/son-to-father-son.component';

@Component({
  selector: 'app-son-to-father-father',
  imports: [
    SonToFatherSonComponent
  ],
  templateUrl: './son-to-father-father.component.html',
  styleUrl: './son-to-father-father.component.css'
})
export class SonToFatherFatherComponent {
  notification: Date = new Date();

  receiveNotification(event: Date) {
    this.notification = event;
  }
}
