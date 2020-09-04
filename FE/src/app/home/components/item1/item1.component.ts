import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {
  @Input() data: any;

  jobType = [
    "Full time",
    "Part time",
    "Intership"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
