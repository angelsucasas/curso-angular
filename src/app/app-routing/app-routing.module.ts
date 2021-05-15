import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router'
import {DadoComponent} from '../components/dado/dado.component'
import {ApiViewComponent} from '../components/api-view/api-view.component'

export const routes: Route[] = [
  {path: "API/v1", component: ApiViewComponent},
  {path: "form", component: DadoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
