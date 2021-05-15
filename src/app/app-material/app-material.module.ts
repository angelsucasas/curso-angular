import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule  } from '@angular/material/slider';
import { MatGridListModule  } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatGridListModule
  ],
  exports:[
    MatSliderModule,
    MatGridListModule
  ]
})
export class AppMaterialModule { }
