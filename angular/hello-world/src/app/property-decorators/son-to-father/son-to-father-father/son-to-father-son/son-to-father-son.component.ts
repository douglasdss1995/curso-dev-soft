import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-son-to-father-son',
  imports: [],
  templateUrl: './son-to-father-son.component.html',
  styleUrl: './son-to-father-son.component.css'
})
export class SonToFatherSonComponent {
  @Input() message: string = '';

  @Output() notification: EventEmitter<Date> = new EventEmitter<Date>();

  sendNotification() {
    this.notification.emit(new Date());
  }

}
