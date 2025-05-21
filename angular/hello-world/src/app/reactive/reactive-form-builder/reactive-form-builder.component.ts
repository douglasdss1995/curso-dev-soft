import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-builder.component.html',
  standalone: true,
  styleUrl: './reactive-form-builder.component.css'
})
export class ReactiveFormBuilderComponent implements OnInit {
  meuForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.meuForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.meuForm.valid) {
      console.log('Formulário enviado', this.meuForm.value);

      if (this.form.get('status')?.value == '1'){
        
      }
    }
  }
}
