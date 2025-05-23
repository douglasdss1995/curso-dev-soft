import {Component, OnInit} from '@angular/core';
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
export class AmIOldComponent implements OnInit {
  isVisible = false;
  idade: number = 1;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      idade: ['', Validators.required]
    });
  }
}
