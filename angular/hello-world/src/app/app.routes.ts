import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {AttributeComponent} from './directives/attribute/attribute.component';
import {ApresentationComponent} from './angular-material/apresentation/apresentation.component';
import {DatepickerComponent} from './angular-material/datepicker/datepicker.component';
import {SliderComponent} from './angular-material/slider/slider.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';


export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'two-way-data-binding', component: TwoWayDataBindingComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'apresentation', component: ApresentationComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'slider', component: SliderComponent},
];
