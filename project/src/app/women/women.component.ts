import { Component, OnInit } from '@angular/core';
import { modelReference } from '../../model/model-for-all';
import { womenIndianWareData } from '../../model/women-indian-wear-data';
import { womenWesternWear } from '../../model/women-western-wear-data';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor() { }
  women:modelReference[];
  dataWomenWesternWear = womenWesternWear;
  dataWomenIndianWare = womenIndianWareData;

  ngOnInit(): void {
  }

}
