import { Component, OnInit, Pipe, PipeTransform, Input, Output } from '@angular/core';
import {PipeExample} from './OGPipe-example'
@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css'],
})

export class PipeExampleComponent extends PipeExample  {

  @Input() entrada: any;
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle;}

  pipeExmaple(value:string){
    console.log(value)
    console.log()
  }

}
