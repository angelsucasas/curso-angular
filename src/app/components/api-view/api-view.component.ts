import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../http/client/http-client.service'

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})
export class ApiViewComponent implements OnInit {
  products:any = [];
  constructor(
    private httpClientService:HttpClientService
  ){}

  ngOnInit() {

    this.httpClientService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.products = data;
    })  
  }
}
