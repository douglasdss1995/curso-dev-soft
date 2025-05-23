import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      years_old: [null, [Validators.required, Validators.min(1), Validators.max(200)]],
    })
  }


}
