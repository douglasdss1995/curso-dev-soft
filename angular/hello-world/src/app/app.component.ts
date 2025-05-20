import {Component} from '@angular/core';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
