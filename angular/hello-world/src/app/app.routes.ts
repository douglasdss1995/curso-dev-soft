import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {ProperentyBidingComponent} from './data-binding/properenty-biding/properenty-biding.component';
import {AtributeComponent} from './directive/atribute/atribute.component';

export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property_binding', component: ProperentyBidingComponent},
  {path: 'atribute', component: AtributeComponent},
];
