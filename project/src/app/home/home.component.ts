import { Component, OnInit } from '@angular/core';
import { modelReference } from '../../model/model-for-all';
import { homeData } from '../../model/home-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeModel:modelReference[];
  dataHome = homeData;
  searchingElement:string='';
  homeCheck = true;
  searchCheck = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  check(element:string){
    if(element.length==0){
      this.homeCheck = true;
      this.searchCheck = false;
    }
    else if (this.searchingElement.length!=0){
      this.searchingElement = element;
      this.homeCheck = false;
      this.searchCheck = true;
    }
  }
}
