import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthService } from './services/auth.service';

/* import { PostsComponent } from './modules/posts/posts.component'; */ // for the new page named posts
/* import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component'; */ // this is uncessary of decoration but why?
/* import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component'; */
/* import { MatButtonModule } from '@angular/material/button';                     // for TEST :::: it's a module to add a button in the html file !! */
@NgModule({
  declarations: [
    AppComponent /* DefaultComponent, DashboardComponent */,
    /* HeaderComponent, FooterComponent, SidebarComponent, */
    /*  PostsComponent,loginComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultModule, //upload the default module to see the new  component
    /* MatButtonModule, */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
