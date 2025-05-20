import {Component} from '@angular/core';
import {InterpolationComponent} from './data-bindig/interpolation/interpolation.component';
import {PropertyBindingComponent} from './data-bindig/property-binding/property-binding.component';
import {EventBindingComponent} from './data-bindig/event-binding/event-binding.component';
import {TwoWayDataBindingComponent} from './data-bindig/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  imports: [InterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayDataBindingComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "hello-world";
}
