import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  @ViewChild("f") loginForm?:NgForm;
  constructor(){}
    username: string = "";
    email: string = "";
    
  
  ngOnInit() {

  }
  printing(){
    console.log(this.email);
    console.log(this.username)
  }
  onSubmit(){
    console.log(">>>>>");
    console.log(this.loginForm);
  }
}
