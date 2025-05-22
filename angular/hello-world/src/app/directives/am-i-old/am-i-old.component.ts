import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-am-i-old',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './am-i-old.component.html',
  styleUrl: './am-i-old.component.css'
})
export class AmIOldComponent {
  form!: FormGroup;
  idade: number = 1;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

  }


}

