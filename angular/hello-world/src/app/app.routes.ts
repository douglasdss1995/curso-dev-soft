import {Routes} from '@angular/router';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropetyBingingComponent} from './data-binding/propety-binging/propety-binging.component';
import {TwoWayDataBindingComponent} from './data-binding/two-way-data-binding/two-way-data-binding.component';
import {ReactiveComponent} from './forms/reactive/reactive.component';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {ReactiveFormBuilderComponent} from './forms/reactive-form-builder/reactive-form-builder.component';
import {AttributeComponent} from './directives/attribute/attribute.component';
import {AmIOldComponent} from './directives/am-i-old/am-i-old.component';
import {PipesComponent} from './pipes/pipes.component';
import {PresentationComponent} from './angular-material/presentation/presentation.component';
import {DatePickerComponent} from './angular-material/date-picker/date-picker.component';
import {FormFieldComponent} from './angular-material/form-field/form-field.component';
import {SliderComponent} from './angular-material/slider/slider.component';
import {TreeComponent} from './angular-material/tree/tree.component';
import {DialogComponent} from './angular-material/dialog/dialog.component';

export const routes: Routes = [
  {path: 'event_binding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propety-binging', component: PropetyBingingComponent},
  {path: 'two-way-data-binding', component: TwoWayDataBindingComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: 'template-driven', component: TemplateDrivenComponent},
  {path: 'reactive-form-builder', component: ReactiveFormBuilderComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'am-i-old', component: AmIOldComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'date-picker', component: DatePickerComponent},
  {path: 'form-field', component: FormFieldComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'dialog', component: DialogComponent},

];
