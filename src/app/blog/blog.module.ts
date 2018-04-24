import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { blogRoutes } from './blog-routing';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(blogRoutes),
  ],
  declarations: [PostComponent, PostDetailComponent]
})
export class BlogModule { }
