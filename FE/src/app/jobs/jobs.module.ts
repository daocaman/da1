import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobComponent } from './screens/list-job/list-job.component';
import { JobDetailComponent } from './screens/job-detail/job-detail.component';
import { RowItemComponent } from './components/row-item/row-item.component';
import { JobsRoutingModule } from "./jobs-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListJobComponent, JobDetailComponent, RowItemComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class JobsModule { }
