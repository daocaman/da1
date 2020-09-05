import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @ViewChild('pagination') pagination;

  crrPage = 1;

  infoPage = null;
  display = 5;

  items = null;

  user = null;

  myStorage = null;
  
  jobType = [
    "Full time",
    "Part time",
    "Intership"
  ];

  category = [
    "Web design",
    "Graphic design",
    "Web development",
    "Human Resources",
    "Support",
    "Android"
  ]
  constructor(
    private _post: PostService
  ) {
    this.myStorage = window.localStorage;
    this.user = this.myStorage.getItem('user');
    this.user = JSON.parse(this.user);
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.user.type==2){
      this._post.getPost(this.user.id, { page: this.crrPage, display: this.display}).subscribe(
        (res: any)=>{
          this.items = res.jobs;
          this.infoPage = res._meta;
          setTimeout(()=>{
            this.pagination.check()
          },1500)
        }
      )
    }else{
      this._post.getAll({ page: this.crrPage, display: this.display, text: ''}).subscribe(
        (res:any)=>{
          this.items = res.jobs;
          this.infoPage = res._meta;
          setTimeout(()=>{
            this.pagination.check()
          },1500)
        }
      )
    }
  }

  delete(id){
    this._post.delete(id).subscribe(
      (res)=>{
        this.getData();
      }
    )
  }

  updatePage(event: any) {
    this.crrPage = event;
    this.getData();
  }

}
