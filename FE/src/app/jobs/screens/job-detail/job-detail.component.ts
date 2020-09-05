import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';

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

  category = [
    "Web design",
    "Graphic design",
    "Web development",
    "Human Resources",
    "Support",
    "Android"
  ]

  data = null;
  id = null;
  postDate = null;
  constructor(
    private route: ActivatedRoute,
    private _job: JobService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this._job.getJob(this.id).subscribe(
      (res: any) => {
        this.data = res.job;
        // console.log(this.data);
        this.postDate = new Date(this.data.post_date);
        console.log(this.data)
      }
    )
  }

}
