import { Component, OnInit } from '@angular/core';
import { modelReference } from '../../model/model-for-all';
import { kidBoysClothingsData } from '../../model/kid-boys-clothing-data';
import { kidGirlsClothingsData } from '../../model/kid-girl-clothes-data';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {

  kid:modelReference[];
  dataKidBoysClothing = kidBoysClothingsData;
  dataKidGirlsClothing = kidGirlsClothingsData;
  constructor() { }

  ngOnInit(): void {
  }

}
