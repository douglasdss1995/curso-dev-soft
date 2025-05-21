import {Component} from '@angular/core';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {ReactiveFormBuilderComponent} from './reactive/reactive-form-builder/reactive-form-builder.component';

@Component({
  selector: 'app-root',
  imports: [TwoWayDataBindingComponent, ReactiveComponent, ReactiveFormBuilderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
