import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-reactive',
  imports: [CommonModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './reactive.component.html',
  standalone: true,
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Formulário Enviado')
    } else {
      alert('Formulário invalido')
    }
  }
}
