import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from "./screens/post-list/post-list.component";
import { PostCreateComponent } from "./screens/post-create/post-create.component";
import { PostEditComponent } from "./screens/post-edit/post-edit.component";

const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:id', component: PostEditComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
