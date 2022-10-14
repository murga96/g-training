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
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    MaterialComponent,
    TableComponent
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
  ]
})
export class MaterialModule { }
