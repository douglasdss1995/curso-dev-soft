import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {
  ReactiveFormBuilderComponent
} from './forms/reactive-form-builder/reactive-form-builder/reactive-form-builder.component';
import {ReactiveComponent} from './forms/reative/reactive/reactive.component';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {AttributeComponent} from './directives/attribute/attribute.component';
import {AmIOldComponent} from './directives/am-i-old/am-i-old.component';
import {PipesComponent} from './pipes/pipes.component';
import {PresentationComponent} from './angular-material/presentation/presentation.component';
import {DatepickerComponent} from './angular-material/datepicker/datepicker.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {SliderComponent} from './angular-material/slider/slider.component';
import {SidenavComponent} from './angular-material/sidenav/sidenav.component';

export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property_binding', component: PropertyBindingComponent},
  {path: 'two_way_data_binding', component: TwoWayDataBindingComponent},
  {path: 'reactive_form_builder', component: ReactiveFormBuilderComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: 'template_driven', component: TemplateDrivenComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'am_i_old', component: AmIOldComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'formfield', component: FormFieldComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'sidenav', component: SidenavComponent},
];
