import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-am-i-old',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './am-i-old.component.html',
  styleUrl: './am-i-old.component.css'
})
export class AmIOldComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      years_old: [null, [Validators.required, Validators.min(1), Validators.max(200)]],
    })
  }

}
