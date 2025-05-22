import {Component} from '@angular/core';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropetyBingingComponent} from './data-binding/propety-binging/propety-binging.component';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {ReactiveComponent} from './forms/reactive/reactive.component';
import {ReactiveFormBuilderComponent} from './forms/reactive-form-builder/reactive-form-builder.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [InterpolationComponent, PropetyBingingComponent, EventBindingComponent, TwoWayDataBindingComponent, TemplateDrivenComponent, ReactiveComponent, ReactiveFormBuilderComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
