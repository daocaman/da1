import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  
  jobType = [
    "Full time",
    "Part time",
    "Intership"
  ];
  constructor() { }

  ngOnInit(): void {
  }

  
}
