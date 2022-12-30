import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './user_login/login/login.component';

const routes: Routes = [
  {
    path: '', // this is the parent's path
    component: LoginComponent,

    children: [
      {
        /* DefaultComponent */ path: '/dashboard',
        component: DefaultComponent,
      },
      {
        path: '', // this is for the child's path that is related to his dady defaultComponent
        component: DashboardComponent, // child 1
      },
      {
        path: 'posts', // to facilitate the redirection of the pages in our browser
        component: PostsComponent, //child 2
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
