import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-am-i-old',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './am-i-old.component.html',
  standalone: true,
  styleUrl: './am-i-old.component.css'
})
export class AmIOldComponent {
  isVisible = false;
  idade: number = 1;
  Form!: FormGroup;

  constructor(private forms: FormBuilder) {
  }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      idade: ['', Validators.required, validators.number],
    });
  }
}
