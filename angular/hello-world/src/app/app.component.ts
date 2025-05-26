import {Component} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
