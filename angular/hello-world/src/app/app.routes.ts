import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {AmIOldComponent} from './directives/structural/am-i-old/am-i-old.component';
import {AtributeComponent} from './directives/atribute/atribute.component';
import {PipesComponent} from './pipes/pipes.component';
import {DatapickerComponent} from './angular-material/datapicker/datapicker.component';
import {SliderComponent} from './angular-material/slider/slider.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {SidenavComponent} from './angular-material/sidenav/sidenav.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {TogglesComponent} from './angular-material/toggles/toggles.component';
import {TreeComponent} from './angular-material/tree/tree.component';

export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'diretive_attribute', component: AtributeComponent},
  {path: 'am_i_old', component: AmIOldComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'am_datepicker', component: DatapickerComponent},
  {path: 'am_slider', component: SliderComponent},
  {path: 'am_form_field', component: FormFieldComponent},
  {path: 'am_sidenav', component: SidenavComponent},
  {path: 'am_button', component: ButtonComponent},
  {path: 'am_toggles', component: TogglesComponent},
  {path: 'am_tree', component: TreeComponent},
];
