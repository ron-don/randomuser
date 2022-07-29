import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url ='https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }
}
