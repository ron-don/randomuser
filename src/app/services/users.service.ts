import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url ='https://randomuser.me/api/?results=100';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }
}
