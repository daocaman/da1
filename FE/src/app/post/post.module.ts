import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './screens/post-create/post-create.component';
import { PostListComponent } from './screens/post-list/post-list.component';
import { PostEditComponent } from './screens/post-edit/post-edit.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostCreateComponent, PostListComponent, PostEditComponent, FormPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
