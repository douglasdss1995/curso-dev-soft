import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';

@Component({
  selector: 'app-am-i-old',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask({ /* opções de cfg */})],
  templateUrl: './am-i-old.component.html',
  styleUrl: './am-i-old.component.css'
})
export class AmIOldComponent implements OnInit {

  form!: FormGroup;

  idade: number = 1;

  constructor(private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      idade: ['', [
        Validators.required,
        Validators.min(1)
      ]]
    })
  }

}
