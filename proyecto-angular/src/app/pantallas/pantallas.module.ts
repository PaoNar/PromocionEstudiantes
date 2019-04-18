import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    MatButtonModule, MatCheckboxModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class PantallasModule { }
