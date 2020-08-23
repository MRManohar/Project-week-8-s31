import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {

  users:any[];

  constructor(private userserv : UsersService) { }

  ngOnInit(): void {
    this.userserv.getUsers().subscribe((data) => {
      this.users = data as any;
      console.log(this.users);
      
    });
  }

}
