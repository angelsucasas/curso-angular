import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
@Pipe({
    name:'PipeEx'
})


export class PipeExample implements PipeTransform{
    toggle2= true;
    stringVar="here"
    /* Para hacer tus propios pipes recuerda implementar la clase PiPeTransform tal
    y como esta arriba
    
    Es importante que todo el cambio que quieras dentro del pipe deve implementarse
    dentro del transform*/
    transform(value:unknown, args?:unknown):any{
        console.log("hola desde el ejemplo")
        this.stringVar=this.stringVar+"e"
        return this.stringVar.length%2==0? 'par'+this.formatterBringer():'impar'+this.formatterBringer();
    }
    
    formatterBringer(){
        return '-current number:'+this.stringVar.length
    }

    toggleFormat2() { this.toggle2 = !this.toggle2;}
}