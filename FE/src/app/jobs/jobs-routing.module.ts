import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './screens/list-job/list-job.component';
import { JobDetailComponent } from './screens/job-detail/job-detail.component';


const routes: Routes = [
  { path: '', component: ListJobComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: JobDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
