import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rogister',
  templateUrl: './rogister.component.html',
  styleUrls: ['./rogister.component.css'],
})
export class RogisterComponent implements OnInit {
  constructor() {}
  rogisterForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    genders: new FormControl(''),
  });

  gendersLS = ['Male', 'Female'];
  OnSubmitted() {
    // console.log(this.email.value);
    // console.log(this.password.value);
    console.log(this.rogisterForm)
  }

  ngOnInit() {}
}
