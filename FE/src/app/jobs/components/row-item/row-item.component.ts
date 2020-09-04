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

  postDate = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);

    this.postDate = new Date(this.data.post_date);

   
  }

}
