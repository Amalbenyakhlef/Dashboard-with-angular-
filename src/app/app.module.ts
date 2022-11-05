import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
/* import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component'; */
/* import { MatButtonModule } from '@angular/material/button'; // it's a module to add a button in the html file !! */
@NgModule({
  declarations: [AppComponent /* DefaultComponent, DashboardComponent */],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule    //upload the default module to see the new  component
    /* MatButtonModule, */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
