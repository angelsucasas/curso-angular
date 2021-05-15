import { Directive,Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollControlDirective {
  @Output() setScroll = new EventEmitter();
  private scroll: number;
  private fixedViewportOffset = 0;
  private element:any
  private onceFlag = 0;
  private currentNavBarPosition:string ="absolute";
  private TopOrBottom: string="80vh"

  constructor(private el: ElementRef) { 
    this.scroll=0;
  }
  /*@HostListener("window:scroll", ['$event'])
  scrollMe(offsetElement:ElementRef){
    console.log("window scroll: ");
    //posición inicial del top es 137 cuando se esta en el inicio de la pagina
    console.log(offsetElement.nativeElement.getBoundingClientRect());
    if(offsetElement.nativeElement.getBoundingClientRect().top<0 && !this.onceFlag){
      this.onceFlag=1;      
      this.currentNavBarPosition="fixed";
      this.TopOrBottom="0"
    }else if (offsetElement.nativeElement.getBoundingClientRect().top>0 && this.onceFlag){
      /*this.onceFlag=0;
      this.currentNavBarPosition="absolute";
      this.TopOrBottom="80vh"*/
      /*alert("cambia a absolute")
    }
  }
  reset() {  this.el.nativeElement.scrollTop = this.scroll }*/
}