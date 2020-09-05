import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  data = null;
  id = null;
  constructor(
    private _post: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData(){
    this._post.getPostID(this.id).subscribe(
      (res:any)=>{
        this.data = res.job;
      }
    )
  }



}
