import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [ Validators.required]),
  })

  error = '';

  submitted = false;
  myStorage = null;

  constructor(
    private _auth : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myStorage = window.localStorage;

  }

  get f(){
    return this.formLogin.controls;
  }

  submit(){
    this.submitted = true;
    if(this.formLogin.valid){
      let postData = this.formLogin.value;
      this._auth.login(postData).subscribe(
        (res:any)=>{
          console.log(res);
          let tmpUser = res.user;
          this.myStorage.setItem('user', JSON.stringify(tmpUser));

          // console.log(this.myStorage.getItem('user'));
          window.location.href = "http://localhost:4200";

        },
        (err)=>{
          this.error = err.error.message;
          console.log(this.error);
        }
      )
    }
  }

  

}
