import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  crrPage = 1;

  display = 6;

  searchValue =  "";
  items = []

  formSearch = new FormGroup({
    title: new FormControl('')
  })
  constructor(
    private _home: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._home.getAll({ page: this.crrPage, display: this.display, text: this.searchValue}).subscribe(
      (res: any) => {
        this.items = res.jobs;
      }
    )
  }

  search(){
    this.searchValue = this.formSearch.controls.title.value;
    this.getData();
  }

}
