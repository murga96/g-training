import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatChipsModule} from '@angular/material/chips';
import { MatCardModule} from '@angular/material/card';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TableComponent } from './table/table.component';
import { ButtonLabelComponent } from './button-label/button-label.component';
import { ActivityComponent } from './activity/activity.component';
import { TopCitiesComponent } from './top-cities/top-cities.component';
import { SocialSalesComponent } from './social-sales/social-sales.component';
import { MonthEarningComponent } from './month-earning/month-earning.component';
import { SpinnerPercentComponent } from './spinner-percent/spinner-percent.component';
import { ViewButtonComponent } from './view-button/view-button.component';

@NgModule({
  declarations: [
    MaterialComponent,
    TableComponent,
    ButtonLabelComponent,
    ActivityComponent,
    TopCitiesComponent,
    SocialSalesComponent,
    MonthEarningComponent,
    SpinnerPercentComponent,
    ViewButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatStepperModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
