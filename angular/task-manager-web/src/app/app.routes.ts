import {Routes} from '@angular/router';
import {TasksComponent} from './features/components/tasks/tasks.component';
import {UsersComponent} from './core/components/users/users.component';
import {TaskItemComponent} from './features/components/tasks/task-item/task-item.component';

export const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task', component: TaskItemComponent},
  {path: `tasks/:id`, component: TaskItemComponent},
  {path: 'users', component: UsersComponent},
  {path: '*', component: TasksComponent},
];
