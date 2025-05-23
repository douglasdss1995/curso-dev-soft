import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {AttributeComponent} from './directives/attribute/attribute.component';
import {AmIOldComponent} from './directives/attribute/am-i-old/am-i-old.component';

export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'diretive_attribute', component: AttributeComponent},
  {path: 'am_i_old', component: AmIOldComponent},
];
