import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoggerService} from '../../logger/logger.service'
@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
})
export class DadoComponent{
  constructor(private loggerService:LoggerService){}

  userDataForm = new  FormGroup({
    name : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
  })

  showMessageFlag = 0
  onSubmit(){
    this.showMessageFlag=1
    this.loggerService.log(this.userDataForm.controls.name.value,DadoComponent.name)
    this.loggerService.log(this.userDataForm.controls.lastName.value,DadoComponent.name)
    this.loggerService.log(this.userDataForm.controls.email.value,DadoComponent.name)
  }
}
