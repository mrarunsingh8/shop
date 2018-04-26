import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const blogRoutes: Routes = [
	{path: 'blog', component: MainLayoutComponent, children: [
		{path: '', component: PostComponent},
		{path: ':blogTitle', component: PostDetailComponent},
	]}
];