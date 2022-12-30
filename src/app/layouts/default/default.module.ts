import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';    // the child 1
import { RouterModule } from '@angular/router';    // the router function to make the difference between the child and the parent 
import { PostsComponent } from 'src/app/modules/posts/posts.component';      //the child 2
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent, 
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // for the routing of the parent can read the child (dashboard)
    SharedModule,   //to show the content of all the component  in shared directive
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule      // the module of the cards we use them in the dashboard component 

  ],
})
export class DefaultModule {}
