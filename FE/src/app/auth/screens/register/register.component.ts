import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
    type: new FormControl(2)
  })

  error = '';
  submitted = false;

  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.registForm.controls;
  }

  submit() {
    this.submitted = true;
    if (this.registForm.valid) {
      let postData = this.registForm.value;
      if (postData.password != postData.repassword) {
        this.error = "Mật khẩu không khớp"
      } else {
        delete postData.repassword;
        this._auth.create(postData).subscribe(
          (res) => {
            this.router.navigate(['/auth']);
          },
          (err) => {
            this.error = err.error.message;
          }
        )
      }

    }
  }
}
