import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form-builder.component.html',
  styleUrl: './reactive-form-builder.component.css'
})
export class ReactiveFormBuilderComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['Jonas', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado', this.form.value);
    }
  }
}
