import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule  } from '@angular/material/slider';
import { MatGridListModule  } from '@angular/material/grid-list';
import { HomePageTopComponent } from './home-page-top.component';

@NgModule({
  declarations: [
    HomePageTopComponent,
  ],
  imports: [
    CommonModule, 
    MatSliderModule,
    MatGridListModule
  ],
  exports:[
    HomePageTopComponent
  ]
})
export class HomePageTopModule { }
