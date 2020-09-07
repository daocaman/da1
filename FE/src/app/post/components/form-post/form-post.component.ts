import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from "../../services/post.service";
@Component({
  selector: 'form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  @Input() data;

  user = null;

  formPost: FormGroup;

  submitted = false;

  constructor(
    private _post: PostService,
    private router: Router
  ) {
    let localStorage = window.localStorage;
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
    this.formPost = new FormGroup({
      id_user: new FormControl((this.data) ? this.data.id_user : this.user.id),
      job_title: new FormControl((this.data) ? this.data.job_title : '', [Validators.required]),
      job_des: new FormControl((this.data) ? this.data.job_des : '', [Validators.required]),
      type: new FormControl((this.data) ? this.data.type : 0, [Validators.required]),
      salary: new FormControl((this.data) ? this.data.salary : 0, [Validators.required]),
      location: new FormControl((this.data) ? this.data.location : '', [Validators.required]),
      category: new FormControl((this.data) ? this.data.category : 0, [Validators.required]),
      expire_date: new FormControl((this.data) ? new Date(this.data.expire_date).toISOString().split("T")[0] : new Date(), [Validators.required]),
      company_name: new FormControl((this.data) ? this.data.company_name : '', [Validators.required]),
      company_des: new FormControl((this.data) ? this.data.company_des : '', [Validators.required]),
      web_site: new FormControl((this.data) ? this.data.web_site : '', [Validators.required]),
      email: new FormControl((this.data) ? this.data.email : '', [Validators.email, Validators.required]),
    })
    setTimeout(() => {
      this.formPost = new FormGroup({
        id_user: new FormControl((this.data) ? this.data.id_user : this.user.id),
        job_title: new FormControl((this.data) ? this.data.job_title : '', [Validators.required]),
        job_des: new FormControl((this.data) ? this.data.job_des : '', [Validators.required]),
        type: new FormControl((this.data) ? this.data.type : 0, [Validators.required]),
        salary: new FormControl((this.data) ? this.data.salary : 0, [Validators.required]),
        location: new FormControl((this.data) ? this.data.location : '', [Validators.required]),
        category: new FormControl((this.data) ? this.data.category : 0, [Validators.required]),
        expire_date: new FormControl((this.data) ? new Date(this.data.expire_date).toISOString().split("T")[0] : new Date(), [Validators.required]),
        company_name: new FormControl((this.data) ? this.data.company_name : '', [Validators.required]),
        company_des: new FormControl((this.data) ? this.data.company_des : '', [Validators.required]),
        web_site: new FormControl((this.data) ? this.data.web_site : '', [Validators.required]),
        email: new FormControl((this.data) ? this.data.email : '', [Validators.email, Validators.required]),
      })
    }, 1000)

  }

  get f() {
    return this.formPost.controls;
  }

  submit() {
    this.submitted = true;
    if (this.formPost.valid) {
      if (!this.data) {
        console.log(this.formPost.value);
        this._post.create(this.formPost.value).subscribe(
          (res) => {
            alert("success");
            this.router.navigate(['/post']);
          }
        )
      } else {
        let postData = this.formPost.value;
        postData = { id: this.data.id, ...postData }
        console.log('postData',postData);

        this._post.updateID(postData).subscribe(
          (res) => {
            alert("success");
            this.router.navigate(['/post']);
          }
        )
      }

    }
  }

}
