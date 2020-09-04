import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  crrPage = 1;

  display = 6;

  items = []
  constructor(
    private _home: HomeService
  ) { }

  ngOnInit(): void {
    this._home.getAll({ page: this.crrPage, display: this.display}).subscribe(
      (res: any) => {
        this.items = res.jobs;
      }
    )
  }

}
