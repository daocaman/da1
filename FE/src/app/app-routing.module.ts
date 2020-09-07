import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(module => module.JobsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
  { path: 'post', loadChildren: () => import('./post/post.module').then(module => module.PostModule) },
  {path: 'user', component: UserComponent},
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
