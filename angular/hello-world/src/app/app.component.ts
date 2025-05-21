import {Component} from '@angular/core';
import {
  ReactiveFormBuilderComponent
} from './forms/reactive-form-builder/reactive-form-builder/reactive-form-builder.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
