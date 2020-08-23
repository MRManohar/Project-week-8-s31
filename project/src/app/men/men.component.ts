import { Component, OnInit } from '@angular/core';
import { modelReference } from '../../model/model-for-all';
import { menTopWareData } from '../../model/men-top-ware-data';
import { menBottomWareData } from '../../model/men-bottom-ware-data';
import { manFestiData } from '../../model/men-indian-festival-ware-data';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor() { }
men:modelReference[];
dataMenTopWare = menTopWareData;
dataMenBottomWare = menBottomWareData;
dataMenFestivalWare = manFestiData;
  ngOnInit(): void {
  }

}
