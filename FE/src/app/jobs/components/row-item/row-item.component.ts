import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.scss']
})
export class RowItemComponent implements OnInit {
  @Input() data: any;

  jobType = [
    "Full time",
    "Part time",
    "Intership"
  ];

  expireDate = null;
  constructor() { }

  ngOnInit(): void {
    this.expireDate = new Date(this.data.expire_date);
  }

}
