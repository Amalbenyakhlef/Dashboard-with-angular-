import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';

// we have to add the decoration of the components that compose the shared module (we need it like that !!!)

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule, // to use it for the division in the shared components
    MatToolbarModule, // used in the header component to use the toolbare module
    MatIconModule, // the icons in the toolbar of the header
    MatButtonModule,
    FlexLayoutModule, // for the flex layout in the header component.html
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule, // for the use of the charts in our dashboard
  ], // and add the export section to get the content of the declared components !!!
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
  ],
})
export class SharedModule {}
