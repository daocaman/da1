import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JobService } from "../../services/job.service";

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent implements OnInit {
  
  @ViewChild('pagination') pagination;

  formSearch = new FormGroup({
    title: new FormControl('')
  })

  crrPage = 1;

  infoPage = null;
  display = 5;

  searchValue =  "";

  items = []

  constructor(
    private _job : JobService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._job.getAll({ page: this.crrPage, display: this.display, text: this.searchValue}).subscribe(
      (res: any) => {
        this.items = res.jobs;
        this.infoPage = res._meta;
        console.log(this.infoPage);
        setTimeout(()=>{
          this.pagination.check()
        },3000)
      }
    )
  }

 

  search(){
    this.searchValue = this.formSearch.controls.title.value;
    this.getData();
  }

  updatePage(event: any) {
    this.crrPage = event;
    this.getData();
  }

}
