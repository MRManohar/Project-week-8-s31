import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  ngOnInit(): void {
  }

}



// import {Component} from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

// /**
//  * @title Basic snack-bar
//  */
// @Component({
//   selector: 'snack-bar-overview-example',
//   templateUrl: 'snack-bar-overview-example.html',
//   styleUrls: ['snack-bar-overview-example.css'],
// })
// export class SnackBarOverviewExample {
//   constructor(private _snackBar: MatSnackBar) {}

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action, {
//       duration: 2000,
//     });
//   }
// }
