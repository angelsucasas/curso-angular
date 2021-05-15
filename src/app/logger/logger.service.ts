import { Injectable } from '@angular/core';
import { LoggerModule } from './logger.module'
@Injectable({
  providedIn: LoggerModule
})
export class LoggerService {
  constructor() { }
  completeDate = new Date()
  getCurrentDate(){
    
    let unformatMonth = this.completeDate.getMonth()
    let currentMonth =  unformatMonth< 10 ?  "0"+unformatMonth : unformatMonth
    return this.completeDate.getDate() + "-"+ currentMonth+ "-" +this.completeDate.getFullYear()
  }
  error(msg: any,callLocation:string) {    
    console.log('%c'+"["+this.getCurrentDate()+"-"+this.completeDate.getHours()+":"+this.completeDate.getMinutes()+":"+this.completeDate.getSeconds()+"]-"+callLocation+":" + JSON.stringify(msg), 'color: red');
  }
  log(msg: any,callLocation:string) {
    console.log('%c'+"["+this.getCurrentDate()+"-"+this.completeDate.getHours()+":"+this.completeDate.getMinutes()+":"+this.completeDate.getSeconds()+"]-"+callLocation+":" + JSON.stringify(msg), 'color: green');
  }
  warning(msg: any,callLocation:string) {
    console.log('%c'+"["+this.getCurrentDate()+"-"+this.completeDate.getHours()+":"+this.completeDate.getMinutes()+":"+this.completeDate.getSeconds()+"]-"+callLocation+":" + JSON.stringify(msg), 'color: yellow');
  }
}
