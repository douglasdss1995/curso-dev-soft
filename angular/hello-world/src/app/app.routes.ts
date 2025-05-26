import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';
import {PipesComponent} from './pipes/pipes.component';
import {PresentationComponent} from './angular-material/presentation/presentation.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {SlideComponent} from './angular-material/slider/slide.component';
import {SidenavComponent} from './angular-material/sidenav/sidenav.component';
import {TreeComponent} from './angular-material/tree/tree.component';
import {
  DialogOverviewExampleComponent
} from './angular-material/dialog-overview-example/dialog-overview-example.component';


export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property_binding', component: PropertyBindingComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'am_button', component: PresentationComponent},
  {path: 'form-field', component: FormFieldComponent},
  {path: 'slider', component: SlideComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'am_dialog', component: DialogOverviewExampleComponent},
];
