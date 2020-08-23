import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  readonly URL = "https://jsonplaceholder.typicode.com/users";

  getUsers(){
    return this.http.get(this.URL);
  }
}
