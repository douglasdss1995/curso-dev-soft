import {Component} from '@angular/core';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropetyBingingComponent} from './data-binding/propety-binging/propety-binging.component';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [InterpolationComponent, PropetyBingingComponent, EventBindingComponent, TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
