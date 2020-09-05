import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('pagination') pagination;

  crrPage = 1;

  infoPage = null;
  display = 5;

  items = null;
  constructor(
    private _user : UserService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._user.getAll({ page: this.crrPage, display: this.display}).subscribe(
      (res:any)=>{
        this.items = res.users;
        this.infoPage = res._meta;
        setTimeout(()=>{
          this.pagination.check()
        },1500)
      }
    )
  }

  updatePage(event: any) {
    this.crrPage = event;
    this.getData();
  }
  

}
