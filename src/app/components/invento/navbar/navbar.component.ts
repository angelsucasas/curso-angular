import { Component, OnInit, ElementRef, HostListener, HostBinding,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{
    '[style.position]' : 'currentNavBarPosition',
    '[style.top]' : 'TopOrBottom'
  }
})

//NOTAS:
/*
  posición inicial del top es 137 cuando se esta en el inicio de la pagina
  542 es el número exacto cuando sale de la primera sección
  *****************************
  el ElementRef.NativeElement es el equivalente a ($this) en jquery, nos da la información
  del componente actual  
*/
export class NavbarComponent implements OnInit {
  private offset:ElementRef
  private onceFlag = 0;
  private currentNavBarPosition:string ="relative"; //absolute
  private TopOrBottom: string="0vh" //80vh
  private navBarChangePoint:number = 0
  private navBarReturnPoint:number = 545
  private name:any

  constructor(
    private navbar: ElementRef,
    private route: ActivatedRoute
  ) {
    this.offset = navbar;    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  @HostListener("window:scroll", ['$event'])
  NavbarFollowUser(){
    this.thisElementIsBeyondthisPoint(this.offset,this.navBarChangePoint)? this.ChangeStylePositionTo(1,"fixed","0"): null
    this.theWindowAndThisElementAreOnTheTop(this.offset,this.navBarReturnPoint)? this.ChangeStylePositionTo(0,"absolute","80vh"): null
  }

  thisElementIsBeyondthisPoint(element:ElementRef,changingPoint:number){
    if(element.nativeElement.getBoundingClientRect().top<changingPoint && !this.onceFlag){
      return true
    }
    return false
  }

  theWindowAndThisElementAreOnTheTop(element:ElementRef,changingPoint:number){
    if(window.pageYOffset<changingPoint && this.onceFlag && element.nativeElement.getBoundingClientRect().top==0){
      return true
    }
    return false
  }

  ChangeStylePositionTo(flagValue:number,newStylePosition:string,NewTopOrBottomValue:string){
    this.onceFlag=flagValue;      
    this.currentNavBarPosition=newStylePosition;
    this.TopOrBottom=NewTopOrBottomValue;
  }
}
